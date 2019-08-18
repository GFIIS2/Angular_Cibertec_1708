import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ShorTextPipe } from './shared/pipes/short-text.pipe';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';
import { ProductsService } from './shared/services/products.service';
import { ProductFormComponent } from './shared/forms/product-form/product-form.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShorTextPipe,
    CreateProductComponent,
    EditProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ListProductComponent
  ],
  providers: [
    SortPipe,
    ProductsService
  ]
})
export class ProductsModule { }
