import { Pipe, PipeTransform } from "@angular/core";
import { IAddress } from "../interfaces/user/address.interface";

@Pipe({
  name: 'address',
  standalone: false,
})
export class AddresPipe implements PipeTransform {
    transform(address: IAddress): string {
      const INVALID_ADDRESS =
          !address.rua ||
          !address ||
          !address.cidade ||
          !address.estado ||
          address.numero === null || address.numero === undefined

      if(INVALID_ADDRESS) {
          return 'Endereço indisponível ou Inválido!'
      }

      return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`
    }
}
