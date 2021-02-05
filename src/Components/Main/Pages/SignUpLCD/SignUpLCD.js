import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import './SignUpLCD.css';

const SignUpLCD = () => {
    const [data, setData] = useState({})

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w9aqhxm', 'template_m9gex68', e.target, 'user_J3Eo9lyqa5OVUGYdoUzHY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <main id="sign-up">
            <div className="sign-up-wrapper">
                <br />
                <br />
                <div
                    className="section mcb-section   "
                    id="vergoeding"
                    style={{ paddingTop: 40, paddingBottom: 40, backgroundColor: "" }}
                >
                    <div className="section_wrapper mcb-section-inner">
                        <div
                            className="wrap mcb-wrap one  column-margin-0px valign-top clearfix"
                            style={{}}
                        >
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_fancy_heading ">
                                    <div className="fancy_heading fancy_heading_icon">
                                        <h1 className="title">Screens registration form</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="wrap mcb-wrap one  column-margin-0px valign-top clearfix"
                            style={{}}
                        >
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one-sixth column_placeholder">
                                    <div className="placeholder">&nbsp;</div>
                                </div>
                                <div className="column mcb-column two-third column_column ">
                                    <div className="column_attr clearfix align_center" style={{}}>
                                        <div
                                            className="gf_browser_chrome gform_wrapper"
                                            id="gform_wrapper_4"
                                            style={{}}
                                        >
                                            <form
                                                method="post"
                                                encType="multipart/form-data"
                                                id="gform_4"
                                                action="/en/screens-registration-form/"
                                            >
                                                <div className="gform_body">
                                                    <ul
                                                        id="gform_fields_4"
                                                        className="gform_fields left_label form_sublabel_above description_below"
                                                    >
                                                        <li
                                                            id="field_4_19"
                                                            className="gfield gfield_contains_required field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label">
                                                                Customer<span className="gfield_required">*</span>
                                                            </label>
                                                            <div className="ginput_container ginput_container_radio">
                                                                <ul className="gfield_radio" id="input_4_19">
                                                                    <li className="gchoice_4_19_0">
                                                                        <input
                                                                            name="input_19"
                                                                            type="radio"
                                                                            defaultValue="New customer"
                                                                            id="choice_4_19_0"
                                                                            tabIndex={1}
                                                                            onclick="gf_apply_rules(4,[7,13,8,14,9,10,11,15,1,12]);"
                                                                            onkeypress="gf_apply_rules(4,[7,13,8,14,9,10,11,15,1,12]);"
                                                                        />
                                                                        <label htmlFor="choice_4_19_0" id="label_4_19_0">
                                                                            New customer
                            </label>
                                                                    </li>
                                                                    <li className="gchoice_4_19_1">
                                                                        <input
                                                                            name="input_19"
                                                                            type="radio"
                                                                            defaultValue="Existing customer"
                                                                            id="choice_4_19_1"
                                                                            tabIndex={2}
                                                                            onclick="gf_apply_rules(4,[7,13,8,14,9,10,11,15,1,12]);"
                                                                            onkeypress="gf_apply_rules(4,[7,13,8,14,9,10,11,15,1,12]);"
                                                                        />
                                                                        <label htmlFor="choice_4_19_1" id="label_4_19_1">
                                                                            Existing customer
                            </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_7"
                                                            className="gfield field_sublabel_above field_description_above gfield_visibility_visible"
                                                            style={{ display: "none" }}
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_7">
                                                                Customer number
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_7"
                                                                    id="input_4_7"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={3}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_13"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_13">
                                                                VAT number
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_13"
                                                                    id="input_4_13"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={4}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_8"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_8">
                                                                Company Name
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_8"
                                                                    id="input_4_8"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={5}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_14"
                                                            className="gfield gfield_contains_required field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_14">
                                                                First and last name
                        <span className="gfield_required">*</span>
                                                            </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_14"
                                                                    id="input_4_14"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={6}
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_9"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_9">
                                                                Adress (street and number)
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_9"
                                                                    id="input_4_9"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={7}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_10"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_10">
                                                                ZIP Code
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_10"
                                                                    id="input_4_10"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={8}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_11"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_11">
                                                                City
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_11"
                                                                    id="input_4_11"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={9}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_15"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_15">
                                                                Country
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_15"
                                                                    id="input_4_15"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={10}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_6"
                                                            className="gfield gfield_contains_required field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_6">
                                                                Email<span className="gfield_required">*</span>
                                                            </label>
                                                            <div className="ginput_container ginput_container_email">
                                                                <input
                                                                    name="input_6"
                                                                    id="input_4_6"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={11}
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_1"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_1">
                                                                Phone number
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_1"
                                                                    id="input_4_1"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={12}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_12"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_12">
                                                                Bank acount number
                      </label>
                                                            <div className="ginput_container ginput_container_text">
                                                                <input
                                                                    name="input_12"
                                                                    id="input_4_12"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={13}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_16"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label
                                                                className="gfield_label gfield_label_before_complex"
                                                                htmlFor="input_4_16_shim"
                                                            >
                                                                Brands and quantities
                      </label>
                                                            <style
                                                                type="text/css"
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        "body .ginput_container_list table.gfield_list tbody tr td.gfield_list_icons{vertical-align:middle!important}body .ginput_container_list table.gfield_list tbody tr td.gfield_list_icons img.add_list_item,body .ginput_container_list table.gfield_list tbody tr td.gfield_list_icons img.delete_list_item{background-color:transparent!important;background-position:0 0;background-size:16px 16px!important;background-repeat:no-repeat;border:none!important;width:16px!important;height:16px!important;opacity:.5;transition:opacity .5s ease-out;-moz-transition:opacity .5s ease-out;-webkit-transition:opacity .5s ease-out;-o-transition:opacity .5s ease-out}body .ginput_container_list table.gfield_list tbody tr td.gfield_list_icons img.add_list_item:hover,body .ginput_container_list table.gfield_list tbody tr td.gfield_list_icons img.delete_list_item:hover{opacity:1.0}",
                                                                }}
                                                            />
                                                            <div className="ginput_container ginput_container_list ginput_list">
                                                                <input
                                                                    type="text"
                                                                    id="input_4_16_shim"
                                                                    style={{ position: "absolute", left: "-999em" }}
                                                                    onfocus='jQuery( "#field_4_16 table tr td:first-child input" ).focus();'
                                                                />
                                                                <table className="gfield_list gfield_list_container">
                                                                    <colgroup>
                                                                        <col
                                                                            id="gfield_list_16_col_1"
                                                                            className="gfield_list_col_odd"
                                                                        />
                                                                        <col
                                                                            id="gfield_list_16_col_2"
                                                                            className="gfield_list_col_even"
                                                                        />
                                                                        <col
                                                                            id="gfield_list_16_col_3"
                                                                            className="gfield_list_col_odd"
                                                                        />
                                                                        <col
                                                                            id="gfield_list_16_col_4"
                                                                            className="gfield_list_col_even"
                                                                        />
                                                                        <col
                                                                            id="gfield_list_16_col_5"
                                                                            className="gfield_list_col_odd"
                                                                        />
                                                                    </colgroup>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Samsung smartphone</th>
                                                                            <th>Apple iPhone</th>
                                                                            <th>Apple iPad</th>
                                                                            <th>Other brands</th>
                                                                            <th>&nbsp;</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="gfield_list_row_odd gfield_list_group">
                                                                            <td
                                                                                className="gfield_list_cell gfield_list_16_cell1"
                                                                                data-label="Samsung smartphone"
                                                                            >
                                                                                <input
                                                                                    type="text"
                                                                                    name="input_16[]"
                                                                                    defaultValue
                                                                                    tabIndex={14}
                                                                                />
                                                                            </td>
                                                                            <td
                                                                                className="gfield_list_cell gfield_list_16_cell2"
                                                                                data-label="Apple iPhone"
                                                                            >
                                                                                <input
                                                                                    type="text"
                                                                                    name="input_16[]"
                                                                                    defaultValue
                                                                                    tabIndex={15}
                                                                                />
                                                                            </td>
                                                                            <td
                                                                                className="gfield_list_cell gfield_list_16_cell3"
                                                                                data-label="Apple iPad"
                                                                            >
                                                                                <input
                                                                                    type="text"
                                                                                    name="input_16[]"
                                                                                    defaultValue
                                                                                    tabIndex={16}
                                                                                />
                                                                            </td>
                                                                            <td
                                                                                className="gfield_list_cell gfield_list_16_cell4"
                                                                                data-label="Other brands"
                                                                            >
                                                                                <input
                                                                                    type="text"
                                                                                    name="input_16[]"
                                                                                    defaultValue
                                                                                    tabIndex={17}
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <br/>
                                                            <div className="gfield_description">
                                                                Enter the number of screens that you send to us per
                                                                brand
                      </div>
                                                        </li>
                                                        <li
                                                            id="field_4_17"
                                                            className="gfield field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_17">
                                                                Total (minimum of 25)
                      </label>
                                                            <div className="ginput_container ginput_container_number">
                                                                <input
                                                                    name="input_17"
                                                                    id="input_4_17"
                                                                    type="text"
                                                                    defaultValue
                                                                    className="medium"
                                                                    tabIndex={18}
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_18"
                                                            className="gfield gfield_contains_required field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label">
                                                                <span className="gfield_required">*</span>
                                                            </label>
                                                            <div className="ginput_container ginput_container_checkbox">
                                                                <ul className="gfield_checkbox" id="input_4_18">
                                                                    <li className="gchoice_4_18_1">
                                                                        <input
                                                                            name="input_18.1"
                                                                            type="checkbox"
                                                                            defaultValue='I agree with the <a href="/en/terms/">terms and conditions</a> and our <a href="/en/privacy/">Privacy policy</a>.'
                                                                            id="choice_4_18_1"
                                                                            tabIndex={19}
                                                                        />
                                                                        <label htmlFor="choice_4_18_1" id="label_4_18_1">
                                                                            I agree with the{" "}
                                                                            <a href="/en/terms/">terms and conditions</a> and
                              our <a href="/en/privacy/">Privacy policy</a>.
                            </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li
                                                            id="field_4_20"
                                                            className="gfield gform_validation_container field_sublabel_above field_description_below gfield_visibility_visible"
                                                        >
                                                            <label className="gfield_label" htmlFor="input_4_20">
                                                                Name
                      </label>
                                                            <div className="ginput_container">
                                                                <input
                                                                    name="input_20"
                                                                    id="input_4_20"
                                                                    type="text"
                                                                    defaultValue
                                                                />
                                                            </div>
                                                            <div className="gfield_description">
                                                                This field is for validation purposes and should be left
                                                                unchanged.
                      </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="gform_footer left_label">
                                                    {" "}
                                                    <input
                                                        type="submit"
                                                        id="gform_submit_button_4"
                                                        className="gform_button button"
                                                        defaultValue="Send"
                                                        tabIndex={20}
                                                        onclick='if(window["gf_submitting_4"]){return false;}  window["gf_submitting_4"]=true;  '
                                                        onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_4"]){return false;} window["gf_submitting_4"]=true;  jQuery("#gform_4").trigger("submit",[true]); }'
                                                    />
                                                    <input
                                                        type="hidden"
                                                        className="gform_hidden"
                                                        name="is_submit_4"
                                                        defaultValue={1}
                                                    />
                                                    <input
                                                        type="hidden"
                                                        className="gform_hidden"
                                                        name="gform_submit"
                                                        defaultValue={4}
                                                    />
                                                    <input
                                                        type="hidden"
                                                        className="gform_hidden"
                                                        name="gform_unique_id"
                                                        defaultValue
                                                    />
                                                    <input
                                                        type="hidden"
                                                        className="gform_hidden"
                                                        name="state_4"
                                                        defaultValue="WyJbXSIsImE1YTc2ZmUyZmI4ZDE2OGZjNGY5ZTU3ZjUyMmEyZDExIl0="
                                                    />
                                                    <input
                                                        type="hidden"
                                                        className="gform_hidden"
                                                        name="gform_target_page_number_4"
                                                        id="gform_target_page_number_4"
                                                        defaultValue={0}
                                                    />
                                                    <input
                                                        type="hidden"
                                                        className="gform_hidden"
                                                        name="gform_source_page_number_4"
                                                        id="gform_source_page_number_4"
                                                        defaultValue={1}
                                                    />
                                                    <input type="hidden" name="gform_field_values" defaultValue />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="column mcb-column one-sixth column_placeholder">
                                    <div className="placeholder">&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;

            </div>
        </main >
    );
};

export default SignUpLCD;