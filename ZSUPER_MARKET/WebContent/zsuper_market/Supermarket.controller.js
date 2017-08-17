sap.ui.controller("zsuper_market.Supermarket", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zsuper_market.Supermarket
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/data.json");
			this.getView().setModel(oModel);
			 var oTemplate =   new sap.m.ColumnListItem({
				 cells: [new sap.m.Text({text : "{product}" }) ,
				         new sap.m.Input({value : "{quan}",id : "ip1"}),
				         new sap.m.Input({value : "{price}"}),
				         new sap.m.Input({value : "{tprice}"}),
				         new sap.m.Button({text : "{iquan}",id : "oBtn", press : this.onPress})				         				         
				         ]				 
			 })
			 
			 var oTab = this.getView().byId("Tabdata");
			   oTab.bindAggregation("items","/tabledata",oTemplate);
	},
	
	onPress : function (oEvent){
		
		debugger;
		  	var quan = parseInt(oEvent.getSource().getParent().getBindingContext().getObject().quan);
		  	var price = oEvent.getSource().getParent().getBindingContext().getObject().price;
		  	
			//var like = parseInt(that.getView().byId("ip1").getValue());
			var Incquan = quan+1;
			oEvent.getSource().getParent().getBindingContext().getObject().quan = Incquan.toString();
			var tprice = price*Incquan;
			oEvent.getSource().getParent().getBindingContext().getObject().tprice = tprice;
			var bindingContext = oEvent.getSource().getParent().getBindingContext().toString();
			var array = bindingContext.split("/");
			var index = array[2];
			
			console.log(array);
			//var oFp = sap.ui.getCore().byId("Tabdata");
			this.getParent().getParent().getAggregation("items")[index].getAggregation("cells")[1].setValue(Incquan.toString());
			
		  },
/**
* Similar to onAfterRendering, but this hook is invo;;ked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zsuper_market.Supermarket
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zsuper_market.Supermarket
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zsuper_market.Supermarket
*/
//	onExit: function() {
//
//	}

});