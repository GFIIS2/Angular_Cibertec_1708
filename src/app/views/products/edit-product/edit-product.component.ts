import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
  editSubs: Subscription;
  product: Product;
  updateSubs: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    //this.product = this.productService.getProduct(+id);
    this.productService.getProduct(+id).subscribe( (product : Product) =>
      this.product =  product
    );

    console.log(this.product);
  }

  onSubmit(){
    this.editSubs = this.productService.updateProduct(this.product)
    .subscribe((product: Product) => {
      this.router.navigate(['/products']);
    });
    /*
    this.productService.updateProduct({id: 101, name:'Mac 1' })
    .subscribe((product: Product) => {
      this.router.navigate(['/products']);
    });
    */
  }

  ngOnDestroy(){
    if(this.editSubs){
      this.editSubs.unsubscribe();
    }
  }
}
