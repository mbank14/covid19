class AreaBawah extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `            <div class="level-item">
        <h1 class="link">data yang digunakan diambil dari <a  href="https://covid19.mathdro.id/api/">Mathroid  </a></h1>
      </div>
    </div>`;
    }
 }

 customElements.define("area-bawah", AreaBawah);