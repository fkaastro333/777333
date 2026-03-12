import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestContactAPI:
    """Contact form API tests"""

    def test_post_contact_success(self):
        payload = {"parent_name": "TEST_João Silva", "child_age": "8 anos", "phone": "(27) 99999-9999", "message": "Teste"}
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data.get("success") is True

    def test_post_contact_missing_required(self):
        r = requests.post(f"{BASE_URL}/api/contact", json={"parent_name": "TEST_X"})
        assert r.status_code == 422

    def test_get_contacts(self):
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)

    def test_get_contacts_has_submission(self):
        """Verify previously submitted contact persists"""
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        contacts = r.json()
        names = [c.get("parent_name", "") for c in contacts]
        assert any("TEST_João Silva" in n for n in names)

    def test_contact_no_id_field(self):
        """MongoDB _id must not be exposed"""
        r = requests.get(f"{BASE_URL}/api/contact")
        contacts = r.json()
        for c in contacts:
            assert "_id" not in c

class TestHealthAPI:
    def test_api_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
