import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';

class Mobil extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeMobil = this.handleChangeMobil.bind(this)
        this.state = {
            mobil: [
                ['Sport', 20008],
                ['SUV', 24300],
                ['Convertible', 20000],
                ['Coupe', 15000],
                ['Station Wagon', 15000],
                ['Sedan', 15000],
                ['Of Road', 15000],
                ['Hatchback X', 38000]
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
                <div className='container'>
                    <div className='tips-content'>
                        <h2>Rental Mobil</h2>
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label">Judul Buku<span>:</span></label>
                            <div class="col-sm-8">
                                <select onChange={this.handleChangeMobil} name='jenis_mobil' class="form-select">
                                    <option value='0'>Pilih Rental Mobil</option>
                                    <Fragment>
                                        {
                                            mobil.map(mobil => {
                                                return (
                                                    <option value={mobil[1]}>{mobil[0]} - Rp.{mobil[1]}</option>
                                                )
                                            })
                                        }
                                    </Fragment>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label">Lama Hari<span>:</span></label>
                            <div class="col-sm-8">
                                <input type="text" pattern="[0-9]*" class="form-control"
                                    onInput={this.handleChangeJumlahHari.bind(this)} value={this.state.jumlahHari} />
                            </div>
                        </div>
                        <h2>Total Harga Rental Mobil:<NumberFormat value={totalHargaMobil * jumlahHari} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></h2>
                    </div>
                </div>
            </>
        )
    }
}
export default Mobil;