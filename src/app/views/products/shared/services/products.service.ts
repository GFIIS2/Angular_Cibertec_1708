import { Injectable } from '@angular/core';
import Product from '../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class ProductsService {

    private api: string = environment.api;
    private endpoint: string = 'products';

    constructor(
        private http: HttpClient
    ) {}

    getProducts() {
        const URL: string = `${this.api}/${this.endpoint}`;
        return this.http.get(URL);       
        //return this.products;
    }

    getProduct(id: number) {
        const URL: string = `${this.api}/${this.endpoint}/${id}`;
        return this.http.get(URL);
        //const prod = this.products.filter(prod => prod.id === id); // []
        //return prod[0];
    }

    deleteProduct(id: number) {
        const URL: string = `${this.api}/${this.endpoint}/${id}`;
        return this.http.delete(URL)
        //this.products = this.products.filter(prod => prod.id !== id);
    }

    createProduct(product: Product){
        const URL: string = `${this.api}/${this.endpoint}`;

        return this.http.post(URL, product, {
            headers: {
                'Content-type':'application/json'
            }
        });
    }

    updateProduct(product: Product){
        const URL: string = `${this.api}/${this.endpoint}/${product.id}`;
        
        return this.http.put(URL, product, {
            headers: {
                'Content-type':'application/json'
            }
        });
    }
}