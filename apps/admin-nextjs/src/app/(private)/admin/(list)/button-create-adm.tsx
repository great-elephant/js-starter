'use client';

import { Guard } from '@/misc/session';
import { ModalCreateAdmin } from '@/widgets/modal-create-admin';
import { Button, openModal } from '@sdks/uikit-react';
import { AdminRole } from '@sdks/types-admin';
import { Plus } from 'lucide-react';

export function ButtonCreateAdm() {
  return (
    <Guard role={AdminRole.SUPER_ADMIN}>
      <Button onClick={() => openModal(ModalCreateAdmin)}><Plus width={16} /> Create admin</Button>
    </Guard>
  );
}