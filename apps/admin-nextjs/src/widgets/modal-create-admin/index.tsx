import { useCommand } from '@sdks/api-react-query';
import { Box, Button, FieldGroup, Label, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalProps, toast } from '@sdks/uikit-react';
import { FieldError, FormReactive, Input, populateError, y } from '@uikit-react/form-reactive';
import { useRef } from 'react';

type CreateAdminFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema: y.ObjectSchema<CreateAdminFormValues> = y.object({
  firstName: y.string().trim().required(),
  lastName: y.string().trim().required(),
  email: y.string().trim().required(),
  password: y.string().trim().required(),
});

export function ModalCreateAdmin({ modalRef }: ModalProps) {
  const formRef = useRef<any>();
  const createAccount = useCommand(client.admin.createAccount);

  async function handleSubmit(values: CreateAdminFormValues) {
    const { error } = await createAccount.invoke(values);

    if (error) {
      populateError(error, formRef.current);
      return toast.error({
        message: 'Failed to create admin account',
        description: error.msg,
      });
    }

    modalRef.close();
    toast.success({ message: 'New admin created' });
  }

  return (
    <FormReactive<CreateAdminFormValues>
      schema={schema}
      innerRef={formRef}
      onSubmit={handleSubmit}
    >
      <Modal>
        <ModalHeader>Create admin</ModalHeader>

        <ModalBody className='flex flex-col gap-4'>
          <Box className='flex flex-row gap-4'>
            <FieldGroup>
              <Label>First name</Label>
              <Input name='firstName' />
              <FieldError name='firstName' />
            </FieldGroup>

            <FieldGroup>
              <Label>Last name</Label>
              <Input name='lastName' />
              <FieldError name='lastName' />
            </FieldGroup>
          </Box>

          <FieldGroup>
            <Label>Email</Label>
            <Input name='email' />
            <FieldError name='email' />
          </FieldGroup>

          <FieldGroup>
            <Label>Password</Label>
            <Input name='password' type='password' />
            <FieldError name='password' />
          </FieldGroup>
        </ModalBody>

        <ModalFooter>
          <ModalCloseButton>Cancel</ModalCloseButton>
          <Button type='submit' loading={createAccount.loading}>Submit</Button>
        </ModalFooter>
      </Modal>
    </FormReactive>
  );
}