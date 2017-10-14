import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterhelloworldBlogModule } from './blog/blog.module';
import { JhipsterhelloworldEntryModule } from './entry/entry.module';
import { JhipsterhelloworldTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterhelloworldBlogModule,
        JhipsterhelloworldEntryModule,
        JhipsterhelloworldTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterhelloworldEntityModule {}
