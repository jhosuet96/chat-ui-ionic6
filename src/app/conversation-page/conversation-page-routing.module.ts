import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversationPagePage } from './conversation-page.page';

const routes: Routes = [
  {
    path: '',
    component: ConversationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversationPagePageRoutingModule {}
