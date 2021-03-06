function SOM_f() {
    SOM_f.prototype.get = function SOM_f() {
        alert("This sum block is obsolete, parameters can not be modified")
    }

    SOM_f.prototype.define = function SOM_f() {
        this.sgn = [[1], [1], [1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["sum"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp(this.sgn)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SOM_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
	SOM_f.prototype.set = function SOM_f() {
        this.sgn = [[1], [1], [1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["sum"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp(this.sgn)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SOM_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SOM_f.prototype.details = function SOM_f() {
        return this.x;
    }

    SOM_f.prototype.get_popup_title = function SOM_f() {
        var set_param_popup_title="Set Parameters";
        return set_param_popup_title
    }
    SOM_f.prototype.getDimensionForDisplay = function SOM_f(){
        var dimension = { width: 40, height: 40 };
        return dimension
    }
}
