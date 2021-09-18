import React, { Fragment } from 'react';
import './Rental.css';
import NumberFormat from 'react-number-format';

class Mobil extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeMobil = this.handleChangeMobil.bind(this)
        this.state = {
            mobil: [
                ['Pick Up', 175000],
                ['Coupe', 200000],
                ['Hatchback X', 200000],
                ['Convertible', 250000],
                ['Sedan', 250000],
                ['Station Wagon', 300000],
                ['SUV', 350000],
                ['Offroad', 400000],
                ['Sport', 500000]
            ],

            menu: {
                jenis_mobil: 0,
            },
            totalHargaMobil: 0,
            jumlahHarga: 0,
            jumlahHari: 0,
        }
    }

    handleCalculation = () => {
        const {
            jenis_mobil
        } = this.state.menu
        var a = jenis_mobil
        this.setState({
            ...this.state.menu,
            totalHargaMobil: a
        }, this.handleTotal
        )
    }

    handleChangeJumlahHari(event) {
        const value = event.target.value.replace(/\+|-/ig, '');
        this.setState({
            jumlahHari: value,
        });
    }
    handleChangeMobil(e) {
        e.preventDefault()
        const { menu } = this.state
        const { name } = e.target
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        this.setState({
            menu: {
                ...menu,
                [name]: Number(value)
            }
        }, this.handleCalculation);
    }
    render() {

        const {
            mobil,
            totalHargaMobil,
            jumlahHari
        } = this.state
        return (
            <>
                <div class="judulkendaraan">Rental Mobil</div>
                <div class="form">
                    <label>Jenis Mobil</label>
                    <select onChange={this.handleChangeMobil} name='jenis_mobil' class="form-select">
                        <option value='0'>Pilih Rental Mobil</option>
                        <Fragment>
                            {
                                mobil.map(mobil => {
                                    return (
                                        <option value={mobil[1]}>{mobil[0]} - Rp {mobil[1]} per hari</option>
                                    )
                                })
                            }
                        </Fragment>
                    </select>
                    <label>Lama Hari</label>
                    <input type="text" pattern="[0-9]*" class="form-control"
                        onInput={this.handleChangeJumlahHari.bind(this)} value={this.state.jumlahHari} />
                </div>
                <div class="harga">Total Harga Rental:</div>
                <div class="harga">
                    <NumberFormat value={totalHargaMobil * jumlahHari} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                </div>
            </>
        )
    }
}
export default Mobil;