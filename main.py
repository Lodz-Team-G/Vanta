from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import os
from dotenv import load_dotenv  # .env dosyasını okumak için kütüphaneyi dahil ettik

load_dotenv()  # Python'a .env dosyasını bul ve içindeki şifreleri yükle dedik

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
        cursor.execute("SELECT message FROM test_table LIMIT 1;")
        result = cursor.fetchone()
        cursor.close()
        conn.close()
        return {"status": "success", "database_message": result[0]}
    except Exception as e:
        return {"status": "error", "detail": str(e)}