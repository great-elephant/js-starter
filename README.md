# Base starter
Source base for a normal project, includes:
- 3 apps: admin site, client site and backend api.
- SDKs: UI components, form validation, API client,...

## 1. Apps
TBD

## 2. SDKs
### 2.1. @sdks/uikit-react
UI component includes:
- animation: collapse, fade, ...
- button:
- feedback: alert, skeleton, spinner, toaster
- form: input, checkbox, radio, switch, slider, label, ...
- layout: box, center, devider,...
- overlay: modal, popover, dropdown menu, tooltip
- panel: accordion, segment, tab, split panel,...
- theme: 
- typography: text, heading
- misc: all other stuffs
- `@sdks/uikit-react/form-reactive`: data entry components + react hook form + yup.

Ref: https://ui.shadcn.com/

### 2.2. API Client
The idea is that you will have a central place for creating reusable API callers, and you can use these callers with other libs(eg: [TanStack Query](https://tanstack.com/query/v3/docs/react/overview)).

It look like this:
```ts
// 1: use inside server component
// page.tsx
export default async function ArticleDetail({ params }) {
  const article = await client.article.detail(params.slug);
  // NOT: const article = fetch(BASE_URL + params.slug);

  ...
}

export async function generateMetadata({ params }) {
  const article = await client.article.detail(params.slug);
  // NOT: const article = fetch(BASE_URL + params.slug);

  return {
    title: article.title,
    ...
  }
}

// 2: use with react hook
// any_where.tsx
import { useCommand, useQuery } from '@sdks/api-react-query';

const createArticleCmd = useCommand(client.article.create);

async function createArticle() {
  const { data, error } = await createArticleCmd.invoke({
    title: 'foo bar',
    ...
  });

  if (error) return toast.error(...)

  router.push(`/article/${data.slug}`)
}

const { data } = useQuery(client.article.search, {
  params: [{
    title: 'lorem',
    page: 1, 
    limit: 10,
  }],
})
```

Here I separate API Client into 3 types of package: core + api client(client site + admin site) + react query:
- @sdks/api-core: shared functions + interfaces for api client
- @sdks/api-client: api client for "Client" site only.
- @sdks/api-admin: api client for "Admin" site only.
- @sdks/api-react-query: built on top of react query, support api caller function.

## 3. Example
### 3.1. Reactive Form + API Client

```tsx
'use client';

import { Button, Label, FieldGroup, toast } from '@sdks/uikit-react';
// `Input` can be imported from `@sdks/uikit-react`, but it is just UI component. For working with react hook form, you need to import `Input` component from `@sdks/uikit-react/form-reactive`.
// import { Input, FieldError } from '@sdks/uikit-react'; UI only
import { y, Input, FieldError, FormReactive } from '@sdks/uikit-react/form-reactive';

interface FormLoginValues {
  email: string;
  password: string;
}

const schema: y.ObjectSchema<FormLoginValues> = y.object({
  email: y.string().required(),
  password: y.string().required(),
});

export function FormLogin() {
  const loginCmd = useCommand(client.user.login);

  async function onSubmit(values: FormLoginValues) {
    const { data, error } = await loginCmd.invoke(values);

    if (error) {
      return toast.error({
        message: 'Login failed',
        description: error.msg,
      });
    }

    // ... router.push('/')
  }

  return (
    <FormReactive<FormLoginValues>
      className='flex flex-col gap-4'
      onSubmit={onSubmit}
      schema={schema}
    >
      <FieldGroup>
        <Label label='Email' htmlFor='email' className='sr-only' />
        <Input
          id='email'
          name='email'
          placeholder='Email'
          type='email'
          autoCapitalize='none'
          autoComplete='email'
          autoCorrect='off'
        />
        <FieldError name='email' />
      </FieldGroup>

      <FieldGroup>
        <Label label='Password' htmlFor='password' className='sr-only' />
        <Input
          id='password'
          name='password'
          placeholder='Password'
          type='password'
          autoCapitalize='none'
          autoComplete='password'
          autoCorrect='off'
        />
        <FieldError name='password' />
      </FieldGroup>

      <Button type='submit' loading={loginCmd.loading || loginCmd.isSuccess} label='Sign In' />
    </FormReactive>
  )
}
```

### 3.2. Create API caller
Github:
- [define api client + callers](https://github.com/great-elephant/base-starter/blob/develop/sdks/api-client/src).
- [create global client for client](https://github.com/great-elephant/base-starter/blob/develop/apps/client-nextjs/src/misc/global/global.client.ts).
- [create global client for server](https://github.com/great-elephant/base-starter/blob/develop/apps/client-nextjs/src/misc/global/global.server.ts).

```ts
// login.ts
import { ClientRunner } from '@sdks/api-core';

export interface UserAuthData {
  id: string;
  accessToken: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export function login(this: ClientRunner, params: LoginParams) {
  return this.send<UserAuthData>(`${this.API_BASE_URL}/admin/login`, {
    method: 'post',
    body: params,
  });
}
```

### 3.3. Modal
Read more: similar to [angular material dialog](https://v6.material.angular.io/components/dialog/overview).

```tsx
// modal-create-x.tsx
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, ModalProps } from '@sdks/uikit-react';

export function ModalCreateX({ modalRef }: ModalProps) {
  return (
    <Modal>
      <ModalHeader>...</ModalHeader>

      <ModalBody className='flex flex-col gap-4'>
        content
      </ModalBody>

      <ModalFooter>
        <Button onClick={() => modalRef.close()}>Cancel</Button>
        {/**or <ModalCloseButton>Cancel</ModalCloseButton>*/}

        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  )
}

// any_where.tsx
import { openModal } from '@sdks/uikit-react';

export function UI() {
  function openModalCreateX() {
    openModal(ModalCreateX)
  }

  ...
}

```