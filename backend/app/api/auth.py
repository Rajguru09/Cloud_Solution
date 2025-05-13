
# backend/app/api/auth.py
import boto3
from fastapi import APIRouter, HTTPException
from botocore.exceptions import NoCredentialsError, PartialCredentialsError

router = APIRouter()

@router.post("/verify-credentials/")
async def verify_credentials(access_key: str, secret_key: str):
    try:
        # Initialize a Boto3 client
        client = boto3.client('sts', aws_access_key_id=access_key, aws_secret_access_key=secret_key)
        # Call the AWS STS service to verify credentials
        client.get_caller_identity()
        return {"message": "AWS credentials are valid"}
    except (NoCredentialsError, PartialCredentialsError) as e:
        raise HTTPException(status_code=400, detail="Invalid AWS credentials")
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error verifying credentials")

