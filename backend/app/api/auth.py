from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
import boto3
from botocore.exceptions import ClientError

router = APIRouter()

class AWSCredentials(BaseModel):
    access_key: str
    secret_key: str

@router.post("/validate-aws")
def validate_aws_credentials(creds: AWSCredentials):
    try:
        sts = boto3.client(
            "sts",
            aws_access_key_id=creds.access_key,
            aws_secret_access_key=creds.secret_key
        )
        response = sts.get_caller_identity()
        return {
            "message": "Valid credentials",
            "account": response["Account"],
            "arn": response["Arn"]
        }
    except ClientError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid AWS credentials"
        )
