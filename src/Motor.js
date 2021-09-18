import React, { Fragment } from 'react';
import './Rental.css';
import NumberFormat from 'react-number-format';

class Motor extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeMotor = this.handleChangeMotor.bind(this)
        this.state = {
            motor: [
                ['Bebek', 50000],
                ['Standard/Naked', 100000],
                ['Cruiser', 125000],
                ['Trail', 150000],
                ['Skuter Matik', 175000],
                ['Sport', 200000]
            ],

            menu: {
                jenis_motor: 0,
            },
            totalHargaMotor: 0,
            jumlahHarga: 0,
            jumlahHari: 0,
        }
    }

    handleCalculation = () => {
        const {
            jenis_motor
        } = this.state.menu
        var a = jenis_motor
        this.setState({
            ...this.state.menu,
            totalHargaMotor: a
        }, this.handleTotal
        )
    }

    handleChangeJumlahHari(event) {
        const value = event.target.value.replace(/\+|-/ig, '');
        this.setState({
            jumlahHari: value
        });

    }
    handleChangeMotor(e) {
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
            motor,
            totalHargaMotor,
            jumlahHari
        } = this.state
        return (
            <>
                <div class="judulkendaraan">Rental Motor</div>
                <div class="form">
                    <label>Jenis Motor</label>
                    <select onChange={this.handleChangeMotor} name='jenis_motor' class="form-select">
                        <option value='0'>Pilih Rental Motor</option>
                        <Fragment>
                            {
                                motor.map(motor => {
                                    return (
                                        <option value={motor[1]}>{motor[0]} - Rp {motor[1]} per hari</option>
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
                    <NumberFormat value={totalHargaMotor * jumlahHari} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                </div>
            </>
        )
    }
}
export default Motor;