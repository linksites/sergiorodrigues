import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Erro de renderizacao da aplicacao:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto w-[min(900px,92vw)] py-16 text-stone-100">
          <h1 className="font-display text-4xl text-gold-300">Falha ao carregar a aplicacao</h1>
          <p className="mt-4 text-stone-300">
            Recarregue a pagina. Se o problema continuar, abra o console do navegador para ver o erro detalhado.
          </p>
        </main>
      );
    }

    return this.props.children;
  }
}
