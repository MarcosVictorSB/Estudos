class NegociacaoController {

   private _inputData: JQuery
   private _inputQuatidade: JQuery
   private _inputValor: JQuery
   private _negociacoes = new Negocicacoes()
   private _negociacoesView = new NegociacoesView('#negociacoesView')
   private _mensagemView = new MensagemView('#mensagemView')

   constructor(){
      this._inputData = $("#data")
      this._inputQuatidade = $("#quantidade")
      this._inputValor = $("#valor")
      this._negociacoesView.update(this._negociacoes)
   }

   adiciona(event: Event){

      event.preventDefault()

      const negociacao = new Negociacao(
         new Date(this._inputData.val().replace('-', ',')),
         parseInt(this._inputQuatidade.val()),
         parseFloat(this._inputValor.val()) 
      )

      this._negociacoes.adiciona(negociacao)
      this._negociacoesView.update(this._negociacoes)
      this._mensagemView.update('Negociação adicionada com sucesso')
   }

}