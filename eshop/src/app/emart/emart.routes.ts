import {RouterModule, Routes} from '@angular/router';
import { CompositeComponent } from './composite/composite.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
export const routes: Routes = [
    {
      path: '',
      redirectTo: 'composite'
    }
    , {
      path: 'composite',
      component: CompositeComponent,
      children: [
        { path: 'product', component: ProductComponent },
        { path: 'productDetails', component: ProductDetailsComponent },
        { path: 'cart', component: CartComponent },
        { path: 'placeOrder', component: PlaceOrderComponent},
        { path: 'login', component: LoginComponent},
        { path: 'signup', component: SignupComponent}
      ]
    }
  ];
