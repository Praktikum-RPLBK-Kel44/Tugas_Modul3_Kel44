import { Component } from "react"; import React from "react";
import Motor from "./Motor";
import Mobil from "./Mobil";
import './Rental.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.handleChangeRental = this.handleChangeRental.bind(this)

        this.state = {
            rentalMobil: false,
            rentalMotor: false
        }
    }
    totalHargaMotor = (childData) => {
        this.setState({ datatotalHargaMotor: childData })
    }
    totalHargaMobil = (childData) => {
        this.setState({ datatotalHargaMobil: childData })
    }
    handleChangeRental(e) {
        e.preventDefault()
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        if (value == 0) {
            this.setState(() => {
                return {
                    rentalMobil: this.state.rentalMobil = false,
                    rentalMotor: this.state.rentalMotor = false

                }
            })
        } else {
            if (value == 1) {
                this.setState(() => {
                    return {
                        rentalMobil: !this.state.rentalMobil,
                        rentalMotor: this.state.rentalMotor = false

                    }
                })
            } else {
                if (value == 2) {
                    this.setState(() => {
                        return {
                            rentalMotor: !this.state.rentalMotor,
                            rentalMobil: this.state.rentalMobil = false

                        }
                    })
                }
            }
        }
    }

    render() {

        return (
            <>
                <div class="container">
                    <h1>Aplikasi Rental Kendaraan</h1>
                    <div class="row">
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label">Jenis Rental<span>:</span></label>
                            <div class="col-sm-8">
                                <select onChange={this.handleChangeRental} name='jenis_rental' class="form-select">
                                    <option value='0'>Pilih Rental</option>
                                    <option value='1'>Rental Mobil</option>
                                    <option value='2'>Rental Motor</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12">
                            {this.state.rentalMotor && <Motor totalHargaMotor={this.totalHargaMotor} />}
                        </div>
                        <div class="col-12">
                            {this.state.rentalMobil && <Mobil totalHargaMobil={this.totalHargaMobil} />}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Parent;