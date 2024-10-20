import CreateBusinessForm from "./form";
import {Alert, Button, Col, Container, Row, Stack} from "react-bootstrap";
import {Briefcase, ChevronLeft, ExclamationTriangleFill, PlusLg} from "react-bootstrap-icons";
import PROJECT_CONFIG from "../../../../config/config";

const PAGE_TITLE = "Create Business"
export default function CreateBusinessPage() {
    let error = null
    return (
        <Container fluid className="p-6">
            {error && (
                <Row>
                    <Col>
                        <Alert variant="danger"><ExclamationTriangleFill size={25} className="me-1"  />{error}</Alert>
                    </Col>
                </Row>
            )}
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="border-bottom pb-4 mb-4">
                        <div className="mb-3 mb-md-0">
                            <Button href={'#'} variant="outline-secondary" className="mb-5"><ChevronLeft /> Back</Button>
                            <h1 className="mb-0 h2 fw-bold"><Briefcase size={30} className="m-2"/> {PAGE_TITLE}</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <CreateBusinessForm />
        </Container>
    );
}