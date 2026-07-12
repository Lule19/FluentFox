import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

const qaItems = [
  {
    question: "Koje jezike imate u ponudi?",
    answer: "Engleski, španski i francuski.",
  },
  {
    question: "Da li i odrasli mogu da se upišu u vašu školu?",
    answer: "Da, nudimo programe stranih jezika, kako za decu, tako i za odrasle.",
  },
  {
    question: "Od koliko godina deca mogu da krenu na časove?",
    answer: "Od pet godina.",
  },
  {
    question: "Gde se održava nastava?",
    answer: "Nastava se održava uživo u našim prostorijama, kao i online.",
  },
  {
    question: "Da li je online nastava efikasna kao i uživo?",
    answer: "Da, uz pravilan pristup i interakciju, online nastava daje odlične rezultate.",
  },
  {
    question: "Gde se nalazi vaša škola?",
    answer: "U Aranđelovcu, u glavnoj ulici, na adresi Knjaza Miloša 144.",
  },
  {
    question: "U kojim terminima su časovi za odrasle?",
    answer: "U popodnevnim terminima, dva puta nedeljno.",
  },
  {
    question: "U kojim terminima su časovi za decu?",
    answer: "Termini su prilagođeni školskim smenama, takođe dva časa nedeljno.",
  },
  {
    question: "Koliko traju časovi engleskog jezika?",
    answer: "Predškolci - 45 min. Osnovci - 60 min. Srednjoškolci - 60 min. Odrasli - 60 min.",
  },
  {
    question: "Koliko traje jedan kurs za odrasle?",
    answer: "Zavisno od tempa i napretka grupe, kao i od nivoa programa, najmanje 4, a najviše 6 meseci.",
  },




  {
    question: "Koliko polaznika ima u grupi?",
    answer: "Grupe su male, kako bi svaki polaznik imao dovoljno vremena za aktivno učešće i govor.",
  },
  {
    question: "Da li dobijam sertifikat nakon završenog kursa?",
    answer: "Da, nakon položenih svih testova, kao i završnog ispita, dobijate sertifikat naše škole kao potvrdu znanja."


  },
  {
    question: "Da li držite individualne časove?",
    answer: "Da, dva puta nedeljno u popodnevnim terminima (1 čas = 60 min), po fiksnoj ceni.",
  },


  {
    question: "Da li mogu da uradim ulazni test i utvrdim svoj nivo znanja?",
    answer: "Da, možete uraditi Placement test (pismeno i usmeno), besplatno, u dogovorenom terminu.",
  },


  {
    question: "Koja je cena kursa?",
    answer: "Cene zavise od programa i uzrasta. Kontaktirajte nas i rado ćemo Vas uputiti.",
  },



  {
    question: "Kako mogu da se prijavim?",
    answer: "Prijava je jednostavna - možete nas kontaktirati putem poruke, telefona ili prijavnog formulara na našem veb-sajtu.",
  },




  {
    question: "Da li postoji probni čas?",
    answer: "Da, postoji mogućnost besplatnog probnog časa kako biste videli na koji način se nastava odvija.",
  },
  {
    question: "Da li vršite pripreme za polaganje Cambridge ispita?",
    answer: "Da, organizujemo stručne pripreme za Kembridž ispite, uz fokus na sve delove ispita i strategije za uspešno polaganje.",
  },
  {
    question: "Koliko dugo važi  Kembridž sertifikat?",
    answer: "Kembridž sertifikati nemaju rok trajanja – važe doživotno.",
  },
  {
    question: "Da li su Kembridž sertifikati međunarodno priznati?",
    answer: "Da. Kembridž sertifikati su međunarodno priznati i prihvaćeni od strane univerziteta, poslodavaca i institucija širom sveta.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function QA() {
  return (
    <div className="font qa-page">
      <div className="qa-hero">
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mx-auto qa-hero-copy"
          >
            
            <br></br>
            <h2 className="section-title text-uppercase mb-3">Pitanja i odgovori</h2>
            <p className="qa-lead mb-0">
              Brzi odgovori na najčešća pitanja o upisu, terminima, uzrastu i načinu rada škole FluentFox.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="qa-content py-0.1">

       
   
        <Row className="g-4">
          {qaItems.map((item, index) => (
            <Col key={item.question} xs={12} md={6} xl={4} className="d-flex">
              <motion.div
                className="w-100"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index}
              >
                <Card className="qa-card h-100 shadow-sm border-0">
                  <Card.Body className="d-flex flex-column qa-card-body">
                    <div className="qa-question-pill mb-3">Pitanje</div>
                    <Card.Title className="qa-question mb-0">{item.question}</Card.Title>

                    <motion.div
                      className="qa-answer-wrap mt-4"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      viewport={{ once: true, amount: 0.35 }}
                    >
                      <div className="qa-answer-label mb-2">Odgovor</div>
                      <Card.Text className="qa-answer mb-0">{item.answer}</Card.Text>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default QA;