import React from "react";
import { useAuth } from "../context/AuthContext";
import { Card, Row, Col } from "react-bootstrap";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="container mt-5 sakura-theme">
      <h2 className="text-center mb-4">🌸 Profil User 🌸</h2>

      <Card className="mb-4 sakura-card shadow">
        <Card.Body>
          <Card.Title>👤 Informasi Pribadi</Card.Title>
          <Card.Text><strong>Nama:</strong> {user?.name}</Card.Text>
          <Card.Text><strong>Role:</strong> {user?.role}</Card.Text>
          <Card.Text><strong>Email:</strong> {user?.email || "admin@sakura.co.jp"}</Card.Text>
        </Card.Body>
      </Card>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="sakura-card shadow">
            <Card.Body>
              <Card.Title>🎨 Hobi</Card.Title>
              <Card.Text>
                Saya senang menggambar bunga sakura, bermain shamisen (alat musik Jepang tradisional), dan membuat teh hijau saat sore hari sambil membaca novel ringan Jepang.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="sakura-card shadow">
            <Card.Body>
              <Card.Title>📖 Cerita Favorit</Card.Title>
              <Card.Text>
                Salah satu kisah favorit saya adalah tentang Hanami, tradisi menikmati bunga sakura mekar di musim semi. Momen ini memberikan ketenangan dan keindahan yang tak tergantikan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
