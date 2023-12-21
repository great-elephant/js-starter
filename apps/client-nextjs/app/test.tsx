'use client';
import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle, Box, Button, Center, Label } from '@sdks/uikit-react';
import { FormReactive, Input, Checkbox, Switch, Textarea, Yup, FieldError, Slider } from '@sdks/uikit-react/form-reactive';

const schema = Yup.object({
  accept: Yup.boolean().isTrue(),
  bio: Yup.string().max(200),
  email: Yup.string().required(),
  gender: Yup.array().min(1).of(Yup.string().min(1)),
});

export function Test() {
  return (
    <FormReactive
      defaultValues={{
        bio: '',
        email: 'hhh',
        accept: true,
        gender: ['female'],
        price: [1, 100],
      }}
      validationSchema={schema}
      onSubmit={(values: any) => {
        console.log('values', values);
      }}
      className='flex flex-col gap-2 font-semibold'
    >
      <Box className='flex flex-col gap-2'>
        <Label htmlFor='email'>email</Label>
        <Input id='email' name='email' />
        <FieldError name='email' />
      </Box>

      <Box className='flex flex-col gap-2'>
        <Label>gender</Label>
        <Label className='flex items-center gap-1'><Checkbox name='gender' value={'male'} />Male</Label>
        <Label className='flex items-center gap-1'><Checkbox name='gender' value={'female'} />Female</Label>
        <FieldError name='gender' />
      </Box>

      <Box className='flex flex-col gap-2'>
        <Label>bio</Label>
        <Textarea id='bio' name='bio' />
        <FieldError name='bio' />
      </Box>

      <Box className='flex flex-col gap-2'>
        <Label>price</Label>
        <Slider id='price' name='price' min={0} max={100} />
      </Box>

      <Center className='bg-red-50 h-10'>Ha</Center>

      <Box className='flex flex-col gap-2'>
        <Label className='flex items-center gap-1 flex-wrap' htmlFor='accept'><Switch id='accept' name='accept' /> Accept TOS</Label>
        <FieldError name='accept' />
      </Box>

      <Button type='submit'>Yo</Button>

      <Alert variant={'destructive'}>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Hello</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>
    </FormReactive>
  );
}