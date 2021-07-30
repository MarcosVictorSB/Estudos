class Negocicacoes {
   private _negociacao: Negociacao[] = []

   adiciona(negociacao: Negociacao){
      this._negociacao.push(negociacao)
   }

   paraArray(): Negociacao[] {      
      return [].concat(this._negociacao)
   }
}