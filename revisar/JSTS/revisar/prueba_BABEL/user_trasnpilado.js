"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usuarios = exports.RoleUsuarios = void 0;
var utils = _interopRequireWildcard(require("../utils/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //import { leeFichero, escribeFich, mensajeError } from "../utils/index.js";
var Usuarios = exports.Usuarios = /*#__PURE__*/function () {
  function Usuarios() {
    _classCallCheck(this, Usuarios);
    _defineProperty(this, "path", 'c:/JSTS/portfolio/users/');
    _defineProperty(this, "users", {});
    this.loadFileUsers();
  }

  // FIXME: se necesita blindar si no se un buen JSON 
  _createClass(Usuarios, [{
    key: "loadFileUsers",
    value: function loadFileUsers() {
      try {
        this.users = JSON.parse(utils.leeFichero(this.path + 'users.json'));
        utils.mensaje("Fichero cargado correctamente");
      } catch (err) {
        utils.mensajeError(err);
      }
    }
    // FIXME: se necesita blindar si no se un buen JSON 
  }, {
    key: "saveFileUsers",
    value: function saveFileUsers() {
      try {
        utils.escribeFich(this.path + 'users.json', JSON.stringify(this.users, null, " "));
        utils.mensaje("Fichero grabado correctamente");
      } catch (err) {
        utils.mensajeError(err);
      }
    }
  }, {
    key: "addUser",
    value: function addUser(user, pass, porfolio) {
      user = user.toLowerCase();
      // INFO: Busco el usuario , si existe lo rechazo
      this.loadFileUsers();
      if (this.users[user] != null) {
        return utils.mensajeError("El usuario ya existe");
      }
      ;
      this.users[user] = {
        porfolio: porfolio,
        pass: pass,
        role: "guest"
      };
      this.saveFileUsers();
      var aux = _objectSpread({}, this.users[user]);
      aux.pass = '*****';
      utils.mensaje("Usuario dado de alta", aux);
      return aux;
    }
  }, {
    key: "delUser",
    value: function delUser(user, pass) {
      var existUser = this.login(user, pass);
      if (Object.keys(existUser).length != 0) {
        delete this.users[user];
        this.saveFileUsers();
        utils.mensaje("Borrado usuario: ", user);
      } else {
        utils.mensajeError("Usuario inexistente");
      }
    }
  }, {
    key: "updUser",
    value: function updUser(user, pass, portfolio) {
      var existUser = this.login(user, pass);
      if (Object.keys(existUser).length != 0) {
        //let aux =  this.users[user];
        var aux = _objectSpread({}, this.users[user]);
        aux["porfolio"] = portfolio;
        this.saveFileUsers();
        utils.mensaje("usuario actualizado: ", user);
      } else {
        utils.mensajeError("Usuario inexistente");
      }
      console.log("metodo updUser ");
    }
  }, {
    key: "getUsers",
    value: function getUsers() {
      return this.users;
    }
  }, {
    key: "login",
    value: function login(user, pass) {
      user = user.toLowerCase();
      var oRet = this.users[user];
      if (oRet == null) {
        return {};
      }
      if (oRet["pass"] != pass) {
        return {};
      }
      ;
      oRet["flastlogin"] = Date.now();
      this.saveFileUsers();
      var aux = _objectSpread({}, oRet);
      delete aux.portolio;
      return aux;
    }
  }, {
    key: "signup",
    value: function signup(user, pass, portolio) {}
  }]);
  return Usuarios;
}();
var RoleUsuarios = exports.RoleUsuarios = /*#__PURE__*/_createClass(function RoleUsuarios() {
  _classCallCheck(this, RoleUsuarios);
});
