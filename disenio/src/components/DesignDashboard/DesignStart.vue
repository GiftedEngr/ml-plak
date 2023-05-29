<template>
 <div class="row w-100 mx-0 text-left">
        <b-modal
        ref="myModalRef"
        hide-footer
        title="Listado de proyectos guardados"
        >
        <div class="overflow-auto">
            <div class="row col">
            <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                <span class="input-group-text" id="project-filter-label"
                    >Filtrar</span
                >
                </div>
                <input
                ref="filterInput"
                type="text"
                class="form-control"
                id="project-filter"
                v-on:keyup="filtrar()"
                v-model="filterQuery"
                />
            </div>
            </div>

            <div class="row col">
            <div class="search-check">
                <input
                type="checkbox"
                v-model="strictSearch"
                id="strict-search"
                @change="filtrar()"
                />
                <label for="strict-search">Busqueda estricta</label>
            </div>
            </div>
            <div class="row px-2 py-1">
                <div class="col">
                  <b-button
                      id="month"
                      size="sm"
                      class="btn btn-filter"
                      style="margin-right: 5px"
                      @click="loadproyectos('month')"
                    >
                90 Dias
                </b-button>
                </div>
                <div class="col">
                  <b-button
                      id="year"
                      size="sm"
                      class="btn btn-filter"
                      style="margin-right: 5px"
                      @click="loadproyectos('año')"
                    >

                Ultimo Año
                </b-button>
                </div>
                <div class="col">
                  <b-button
                      id="all"
                      size="sm"
                      class="btn  btn-filter"
                      style="margin-right: 5px"
                      @click="loadproyectos('all')"
                    >

                Todos
                </b-button>
                </div>
                
            </div>
            <b-table
            striped
            hover
            :items="proyectosFiltered"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :per-page="pagOptions.total"
            :current-page="pagOptions.active"
            >
            <template slot="cell(index)" slot-scope="data">
                {{ data.index + 1 }}
            </template>

            <template slot="cell(nombre)" slot-scope="data">
                <a href="#" @click="proyectoLoad(data.item.id)">{{
                data.item.nombre
                }}</a>
            </template>

            <template slot="cell(opcion)" slot-scope="data">
                <button
                type="button"
                class="btn btn-sm btn-danger"
                @click="proyectoDelete(data.item)"
                >
                Eliminar
                </button>
            </template>
            </b-table>

            <div class="mt-3">
            <b-pagination
                v-model="pagOptions.active"
                :total-rows="proyectosFiltered.length"
                :per-page="pagOptions.total"
                aria-controls="my-table"
                align="center"
            ></b-pagination>
            </div>
        </div>
        </b-modal>
     <div class="mainbox">
         <div class="box_title">
            Bienvenido al centro de diseño
         </div>
         <div class="box_content">
             <ul class="box_menu">
                 <li @click="startnew()" class="box_item"> 
                     <div class="flex">
                         <div >
                             <b-button
                                size="sm"
                                style="margin-right: 5px"
                                variant="primary"
                                v-b-tooltip.hover
                                title="Nuevo Proyecto"
                            >
                                <b-icon icon="file-plus"></b-icon>
                            </b-button>
                         </div>
                         <div>
                            Nuevo Proyecto
                         </div>
                     </div>
                     
                 </li>
                 <li @click="openmodal()" class="box_item">
                     <div class="flex">
                         <div >
                             <b-button
                                size="sm"
                                class="btn"
                                style="margin-right: 5px"                                
                                v-b-tooltip.hover
                                title="Cargar"
                            >
                                <b-icon icon="folder-symlink"></b-icon>
                            </b-button>
                         </div>
                         <div>
                            Cargar Proyecto
                         </div>
                     </div>
                 </li>
             </ul>
         </div>
     </div>
 </div>
</template>
<script>
import Vue from 'vue'
import { HTTP } from '@/plugins/HTTP.js'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Footer from './layout/Footer'
import DesignToolbar from './layout/DesignToolbar.vue'
import VueNoty from "vuejs-noty";
import swal from "sweetalert2";


Vue.use(VueNoty, {
  theme: "metroui",
});

 Vue.use(BootstrapVue)
 Vue.use(BootstrapVueIcons)

export default {
    name: 'DesignStart',
   data(){
       return{
            prueba : 1,
            project_exist:false,
            project_name: null, 
            username: null,
            modulo :"",
            filterQuery: "",
            proyectosFiltered: [],
            pagOptions: {
                total: 15,
                active: 0,
                sections: 0,
            },
            proyectos: [],
            strictSearch: false,
            sortBy: "created_at",
            sortDesc: true,
            fields: [
                { key: "index", label: "#" },
                { key: "nombre", sortable: true },
                { key: "created_at", label: "Creado", sortable: true },
                "opcion",
            ],
            filtro:'month',
            month : null,
            year: null,
            all:null

            }
   },
   components:{
       Footer,
       DesignToolbar
   },
   created:function(){
       //this.checkprevproject();
   },
   updated:function(){
     this.checkactive()
   },
   methods:{
       checkprevproject(){
          var vuex=  localStorage.getItem('vuex')
          if(vuex!=null){

          }
       },
       async checkactive(){ 
              try {                
                this.month = document.getElementById('month')
                this.year = document.getElementById('year')
                this.all = document.getElementById('all')
                }catch(error){
                  alert(error)
                }
       },
        checkproyectname(name){
          HTTP.post(`/api/proyecto-json/checkname`, {
              project : name
            }).then(result => {
              if(!result.data.exist){
                    const projectName =name || "Proyecto " + Math.floor(Math.random() * 5000) + 1;
                    localStorage.setItem("creating-project", 1);
                    localStorage.setItem("creating-project-name", projectName);
                    localStorage.setItem("modulo", "DesignDashboard");
                    this.modulo = "DesignDashboard";
                    this.$router.push({ name: "DesignDashboard", params: { id: 0 } });
                    this.$emit("moduloCambiado");
                    this.getModuloFromStore()
                 }else{
                    this.$noty.info("Ya existe un proyecto con ese nombre.", {
                      timeout: 3000,
                    });
                 }            
            }).catch(result => {
              console.log(result)
            })
       } ,
      async startnew(){
          var result = await swal({
            title: "Nuevo Proyecto",
            input: "text",
            inputPlaceholder: "Nombre del proyecto",
            showCancelButton: true,
            cancelButtonText:"cancelar",
            cancelButtonColor: "#eb3434",
            allowOutsideClick: false
          }).then((result)=>{
            if(result.isCanceled){
              return;
            }
            if(result.value){   
                this.project_name = result.value
                this.checkproyectname(this.project_name)
            }
          });

          
            
       },
       getModuloFromStore() {
      this.modulo = localStorage.getItem("modulo") || "asistencia";
      // si el localstorage dice que estamos en diseño
      // pero segun la ruta no, cambiar componentes
      if (this.modulo == "DesignDashboard" && this.$route.name != "DesignDashboard") {
        this.modulo = "asistencia";
      } else if (
        this.modulo != "DesignDashboard" &&
        this.$route.name == "DesignDashboard"
      ) {
        this.modulo = "DesignDashboard";
      }
    },
    
    async openmodal(){
         this.$refs.myModalRef.show()
       await this.checkactive()
        this.loadproyectos()
    },
    loadproyectos(initial = 'month'){
        this.$noty.info("Cargando lista de proyectos...", {
        timeout: 3000,
      });
      let self = this;

      switch (initial) {
        case 'month':   
                self.filtro = "month"
                          
                HTTP.get(`/api/proyecto-json/initial/month`)
                .then((result) => {
                  self.proyectosFiltered = result.data.proyectos;
                  self.proyectos = result.data.proyectos;
                  
                  this.$noty.success("Datos Cargados", {
                    timeout: 1000,
                  });
                  this.month.setAttribute('disabled',true)
                  this.year.removeAttribute('disabled')
                  this.all.removeAttribute('disabled')

                })
                .catch((result) => {
                  console.log(result)
                });
          break;
          case 'año':
            self.filtro = "year"
                HTTP.get(`/api/proyecto-json/initial/year`)
                .then((result) => {
                  self.proyectosFiltered = result.data.proyectos;
                  self.proyectos = result.data.proyectos;
                  this.$noty.success("Datos Cargados", {
                    timeout: 1000,
                  });
                  this.month.removeAttribute('disabled')
                  this.year.setAttribute('disabled',true)
                  this.all.removeAttribute('disabled')
                })
                .catch((result) => {});
          break;
          case 'all':
                self.filtro = "all"
                HTTP.get(`/api/proyecto-json/initial/all`)
                .then((result) => {
                  self.proyectosFiltered = result.data.proyectos;
                  self.proyectos = result.data.proyectos;              
                  this.$noty.success("Datos Cargados", {
                    timeout: 1000,
                  });
                  this.month.removeAttribute('disabled')
                  this.year.removeAttribute('disabled')
                  this.all.setAttribute('disabled',true)
                })
                .catch((result) => {});
          break;
      
      }
    },
    filtrar() {
      if (!this.filterQuery) {
        this.proyectosFiltered = this.proyectos;
      }
      this.proyectosFiltered = [];
      if (this.strictSearch) {
        this.proyectosFiltered = this.proyectosFiltered.concat(
          this.proyectosFiltered,
          this.proyectos.filter((proy) => {
            return (
              proy.nombre
                .toUpperCase()
                .indexOf(this.filterQuery.toUpperCase()) > -1
            );
          })
        );
      } else {
        this.filterQuery.split(" ").forEach((q) => {
          if (q) {
            this.proyectosFiltered = this.proyectosFiltered.concat(
              this.proyectosFiltered,
              this.proyectos.filter((proy) => {
                return (
                  proy.nombre.toUpperCase().indexOf(q.trim().toUpperCase()) > -1
                );
              })
            );
          }
        });
      }
      if (!this.filterQuery) {
        this.proyectosFiltered = this.proyectos;
      }
    },
    proyectoLoad(proyecto, template_loaded = true) {

  
        localStorage.setItem("modulo", "DesignDashboard");
            this.modulo = "DesignDashboard";
            this.$router.push({ name: "DesignDashboard", params: { id: proyecto } });
            this.$emit("moduloCambiado");
            this.getModuloFromStore()
            
    },
    setErrorsIn3d(errors) {
      this.$store.commit("setErrorsIn3d", errors);
    }
  
  }
}

</script>
<style>
.mainbox{
    width: 65%;
    height: 400px;
    margin-top:75px;
    margin-left:100px;
    box-shadow: 1px 2px 2px 1px gray;
    padding: 16px;
    border-radius: 8px;
    background: white;
}
.box_title{
    font-size: 32px;
    color: rgba(50, 50, 53, 0.911);
    text-decoration: underline;
    font-weight: bold;
    
}
.box_menu{
    list-style: none;
}
.box_item{
   margin-top:12px;
   font-size: 18px;
   color: rgba(55, 55, 207, 0.89); 
}
.box_item:hover{
    cursor: pointer;
    color: rgba(36, 36, 175, 0.89);

}
.flex{
    display: flex;
}
</style>