import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

async function implementsToken(jwtService: JwtService, context: ExecutionContext){
    const req = context.switchToHttp().getRequest()
    const token = req.headers.authorization.split(' ')[1]
    if(token){
        try {
            const secret = process.env.JWT_SECRET
            const payload = jwtService.verify(token, {secret: secret})
            payload.iat = new Date(payload.iat * 1000)
            payload.exp = new Date(payload.exp * 1000)
            req.user = payload
            return true
        } catch (error) {
            throw new UnauthorizedException('No ha sido authorizado para cceder a este sitio' + error)
        }
    }else{
        throw new BadRequestException('No se ha provisto del token respectivo')
    }
}

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private readonly jwtService: JwtService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        return implementsToken(this.jwtService, context)
    }

}
