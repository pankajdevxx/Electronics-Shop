import MySQLdb
from django.db import connection

def check_db_connection():
    """Checks the database connection state and returns status & message."""
    try:
        connection.ensure_connection()
        return True, "Django database connection active"
    except Exception as e:
        return False, f"Connection error: {str(e)}"

if __name__ == "__main__":
    import os
    import sys
    import django
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'electronics_shop.settings')
    django.setup()
    status, msg = check_db_connection()
    print(f"Status: {status}, Detail: {msg}")
