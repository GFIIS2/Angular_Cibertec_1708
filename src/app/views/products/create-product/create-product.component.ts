import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {

  createSubs: Subscription;
  updateSubs: Subscription;

  constructor(
    private router: Router,
    //private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    /*
    const { id } = this.route.snapshot.params;
    
    this.productService.getProduct(+id).subscribe( (product : Product) =>
      this.product =  product
    );

    console.log(this.product);
    */
  }

  onSubmit(product: Product){
    this.createSubs = this.productService.createProduct(product)
    .subscribe((product: Product) => {
      this.router.navigate(['/products']);
    });
  
    /*
    this.productService.createProduct({ name:'Test 1' })
    .subscribe((product: Product) => {
      this.router.navigate(['/products']);
      //console.log('Producto creado >', product);
    });
    */
  }

  ngOnDestroy(){
    if(this.createSubs){
      this.createSubs.unsubscribe();
    }
  }
}
