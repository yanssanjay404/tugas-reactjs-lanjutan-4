import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function AdminDashboard() {
  return (
    <div className="container mt-5 sakura-theme">
      <h2 className="text-center mb-4">🌸 Admin Dashboard 🌸</h2>
      <p className="text-center text-muted">
        Selamat datang, Admin. Hanya Anda yang memiliki akses ke halaman ini.
      </p>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow sakura-card">
            <Card.Body>
              <Card.Title>📊 Statistik</Card.Title>
              <Card.Text>
                Lihat performa aplikasi dan jumlah pengguna yang aktif.
              </Card.Text>
              <Button variant="light" className="sakura-btn">Lihat Statistik</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow sakura-card">
            <Card.Body>
              <Card.Title>👥 Manajemen Pengguna</Card.Title>
              <Card.Text>
                Tambah, edit, atau hapus akun pengguna dari sistem.
              </Card.Text>
              <Button variant="light" className="sakura-btn">Kelola Pengguna</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow sakura-card">
            <Card.Body>
              <Card.Title>⚙️ Pengaturan Sistem</Card.Title>
              <Card.Text>
                Ubah pengaturan sistem sesuai kebutuhan operasional.
              </Card.Text>
              <Button variant="light" className="sakura-btn">Buka Pengaturan</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AdminDashboard;
