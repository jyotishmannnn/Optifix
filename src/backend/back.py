import os
import supabase
from werkzeug.utils import secure_filename

# Supabase Configuration
SUPABASE_URL = "https://uvnaukskalklwprlhptx.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2bmF1a3NrYWxrbHdwcmxocHR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzM5ODQ4MywiZXhwIjoyMDU4OTc0NDgzfQ.qxF__TFEBkRL0IpPCMsUZRD6A0oK6auiorUmeViqbjs"

# Initialize Supabase Client
client = supabase.create_client(SUPABASE_URL, SUPABASE_KEY)

def upload_resume(file_path, full_name, phone_number):
    """Uploads a PDF resume to Supabase Storage and returns the file URL."""
    try:
        # Ensure filename is safe
        safe_name = secure_filename(full_name)
        safe_phone = secure_filename(phone_number)
        file_name = f"{safe_name}_{safe_phone}.pdf"

        # Read file as binary
        with open(file_path, "rb") as file:
            response = client.storage.from_("resumes").upload(file_name, file)

        # Check for errors
        if isinstance(response, dict) and "error" in response:
            return None, response["error"]["message"]

        # Generate file URL
        file_url = f"{SUPABASE_URL}/storage/v1/object/public/resumes/{file_name}"
        return file_url, None
    except Exception as e:
        return None, str(e)

def add_user(full_name, email, phone_number, areas_of_interest, interested, resume_url):
    """Inserts a new row into the user_data table."""
    try:
        # Insert data into Supabase table
        response = client.table("user_data").insert({
            "Full Name": full_name,
            "Email": email,
            "Phone Number": phone_number,
            "Areas of Interest": areas_of_interest,
            "Interested": interested,
            "resume_url": resume_url
        }).execute()

        return {"message": "User data added successfully!", "data": response}
    except Exception as e:
        return {"error": str(e)}

# Example Usage
if __name__ == "__main__":
    # User details
    file_path = r"D:\DOWNLOADS\DA2 (1).pdf"  # Ensure this file exists
    full_name = "John Doe"
    email = "johndoe@example.com"
    phone_number = "1234567890"
    areas_of_interest = "Machine Learning"
    interested = "Because i nedd this internship dammit!!"  # Boolean

    # Step 1: Upload Resume
    resume_url, upload_error = upload_resume(file_path, full_name, phone_number)
    
    if upload_error:
        print({"error": upload_error})
    else:
        # Step 2: Insert Data into Supabase
        result = add_user(full_name, email, phone_number, areas_of_interest, interested, resume_url)
        print(result)
