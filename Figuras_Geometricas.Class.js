"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Figuras_Geometricas = /** @class */ (function () {
    function Figuras_Geometricas(Nombre, R_perimetro, R_Area) {
        this.Nombre = Nombre;
        this.R_perimetro = R_perimetro;
        this.R_Area = R_Area;
    }
    return Figuras_Geometricas;
}());
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(P_lado, S_lado, T_lado, C_lado) {
        var _this = _super.call(this, 'Cuadrado') || this;
        _this.P_lado = P_lado;
        _this.S_lado = S_lado;
        _this.T_lado = T_lado;
        _this.C_lado = C_lado;
        return _this;
    }
    Cuadrado.prototype.Calcular_Perimetro_Cuadrado = function () {
        try {
            this.R_perimetro = this.P_lado + this.S_lado + this.T_lado + this.C_lado;
            return this.R_perimetro;
        }
        catch (ex) {
        }
    };
    Cuadrado.prototype.Calcular_Area_Cuadrado = function () {
        try {
            this.R_Area = this.P_lado * this.P_lado;
            return this.R_Area;
        }
        catch (error) {
        }
    };
    Cuadrado.prototype.Mostar_Resultado = function () {
        try {
            var Resul = "El Perimetro del Cuadrado es " + this.Calcular_Perimetro_Cuadrado() + " y su Area es " + this.Calcular_Area_Cuadrado();
            return new Promise(function (codigo, error) {
                codigo(Resul);
            });
        }
        catch (error) {
        }
    };
    return Cuadrado;
}(Figuras_Geometricas));
exports["default"] = (Cuadrado);
