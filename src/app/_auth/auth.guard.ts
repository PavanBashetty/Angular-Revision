import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn:'root'
})
class PermissionService {
    
    currentPipeState!:boolean;
    constructor(private router:Router){}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{

        localStorage.getItem('pipeAuth') == 'true' ? this.currentPipeState = true : this.currentPipeState = false;
        if(!this.currentPipeState){
            console.log('You are not authorized to view this page!');
            this.router.navigate(['/basics/no-access']);
        }
        return this.currentPipeState;
    }
}

export const authGuard: CanActivateFn = (route, state)=>{
    return inject(PermissionService).canActivate(route, state);
}