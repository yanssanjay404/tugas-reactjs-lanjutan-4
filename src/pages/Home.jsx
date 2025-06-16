import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <div className="container mt-5 sakura-theme">
      <h2 className="text-center mb-4">🌸 Selamat Datang di Sakura Admin Portal 🌸</h2>
      <p className="text-center text-muted">
        Platform modern dengan sentuhan budaya Jepang, tenang namun kuat.
      </p>

      <Card className="mb-4 sakura-card shadow">
        <Card.Body>
          <Card.Title>🎯 Tujuan Website</Card.Title>
          <Card.Text>
            Website ini dirancang untuk memudahkan admin dalam mengelola data,
            mengatur pengguna, dan memantau perkembangan sistem dengan efisien. Kami
            memadukan teknologi dengan estetika untuk menghadirkan pengalaman terbaik.
          </Card.Text>
        </Card.Body>
      </Card>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="sakura-card shadow text-center">
            <Card.Body>
              <Card.Title>📈 Monitoring Real-time</Card.Title>
              <Card.Text>
                Pantau aktivitas pengguna dan statistik sistem secara langsung.
              </Card.Text>
              <Button variant="light" className="sakura-btn">Lihat Statistik</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="sakura-card shadow text-center">
            <Card.Body>
              <Card.Title>🔐 Manajemen Aman</Card.Title>
              <Card.Text>
                Kelola data dan pengguna dengan sistem autentikasi yang aman.
              </Card.Text>
              <Button variant="light" className="sakura-btn">Kelola Data</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="sakura-card shadow text-center">
            <Card.Body>
              <Card.Title>🌸 Desain Elegan</Card.Title>
              <Card.Text>
                Antarmuka bertema sakura yang lembut dan menenangkan mata.
              </Card.Text>
              <Button variant="light" className="sakura-btn">Jelajahi</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4 sakura-card shadow">
        <Card.Body>
          <Card.Title>💬 Kutipan Inspiratif</Card.Title>
          <blockquote className="blockquote mb-0">
            <p>"Hidup itu seperti bunga sakura—indah, namun singkat. Nikmatilah setiap momennya."</p>
            <footer className="blockquote-footer">Pepatah Jepang</footer>
          </blockquote>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Home;
