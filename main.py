from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/test")
def read_db_hello():
    db_url = os.environ.get("DATABASE_URL")
    try:
        conn = psycopg2.connect(db_url)
        cursor = conn.cursor()
        cursor.execute("SELECT message FROM test_table ORDER BY message ASC;")
        results = cursor.fetchall()
        cursor.close()
        conn.close()
        messages = [row[0] for row in results]
        return {"status": "success", "database_messages": messages}
    except Exception as e:
        return {"status": "error", "detail": str(e)}
