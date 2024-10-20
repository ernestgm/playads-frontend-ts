'use client'

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Floppy} from "react-bootstrap-icons";
import {businessCreateAction} from "./action";
import useActionState from "../../../../hooks/form/useActionState";
import {Spinner} from "react-bootstrap";




export default function CreateBusinessForm() {
    const [ loading, errors, formAction ] = useActionState(businessCreateAction, {});

    return (
        <Form action={formAction}>
            <Row className="mb-3">
                <Form.Group controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter name"
                        isInvalid={errors?.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors?.name && errors?.name[0]}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Description" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group controlId="formGridOwner">
                    <Form.Label>Owner</Form.Label>
                    <Form.Select
                        name="user_id"
                        defaultValue="Choose User Owner..."
                        isInvalid={errors?.user_id}
                    >
                        <option value="">Choose...</option>
                        <option value="1">...</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors?.user_id && errors?.user_id[0]}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" placeholder="1234 Main St" />
                </Form.Group>
            </Row>
            <Row className="mt-5 pt-5 border-top">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button disabled={loading}  type="submit" size="lg" variant="primary">
                        {!loading ? (<Floppy />) : (<Spinner animation="border" size="sm"  />)} Save
                    </Button>
                </div>
            </Row>
        </Form>
    )
}