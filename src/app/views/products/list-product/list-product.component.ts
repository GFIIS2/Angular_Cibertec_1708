import { Component, OnInit } from '@angular/core';
import Product from '../product.model';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { ProductsService } from '../shared/services/products.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { products } from 'src/app/mocks/products';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  allProducts: Product[];

  constructor(
    private sortPipe: SortPipe,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.allProducts = products;
    });
    //this.allProducts = this.productService.getProducts();
  }

  onSort(value: string) {
    this.sortPipe.transform(
      this.allProducts,
      value
    );
  }

  onRemove(id: number) {
    
    this.productService.deleteProduct(id);
    this.allProducts = this.allProducts.filter(prod =>  prod.id !== id);
  }

}
