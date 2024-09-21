export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELLCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1"> <!-- So that mobile will display zoomed in -->
<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- enable media queries for windows phone 8 -->
<meta name="format-detection" content="telephone=no"> <!-- disable auto telephone linking in iOS -->
<meta name="format-detection" content="date=no"> <!-- disable auto date linking in iOS -->
<meta name="format-detection" content="address=no"> <!-- disable auto address linking in iOS -->
<meta name="format-detection" content="email=no"> <!-- disable auto email linking in iOS -->
<meta name="color-scheme" content="only">
<title></title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<style type="text/css">
/*Basics*/
body {margin:0px !important; padding:0px !important; display:block !important; min-width:100% !important; width:100% !important; -webkit-text-size-adjust:none;}
table {border-spacing:0; mso-table-lspace:0pt; mso-table-rspace:0pt;}
table td {border-collapse: collapse;mso-line-height-rule:exactly;}
td img {-ms-interpolation-mode:bicubic; width:auto; max-width:auto; height:auto; margin:auto; display:block!important; border:0px;}
td p {margin:0; padding:0;}
td div {margin:0; padding:0;}
td a {text-decoration:none; color: inherit;}
/*Outlook*/
.ExternalClass {width: 100%;}
.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height:inherit;}
.ReadMsgBody {width:100%; background-color: #ffffff;}
/* iOS BLUE LINKS */
a[x-apple-data-detectors] {color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;} 
/*Gmail blue links*/
u + #body a {color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}
/*Buttons fix*/
.undoreset a, .undoreset a:hover {text-decoration:none !important;}
.yshortcuts a {border-bottom:none !important;}
.ios-footer a {color:#aaaaaa !important;text-decoration:none;}
/* data-outer-table="800 - 600" */
.outer-table {width:640px!important;max-width:640px!important;}
/* data-inner-table="780 - 540" */
.inner-table {width:580px!important;max-width:580px!important;}
/*Responsive-Tablet*/
@media only screen and (max-width: 799px) and (min-width: 601px) {
  .outer-table.row {width:640px!important;max-width:640px!important;}
  .inner-table.row {width:580px!important;max-width:580px!important;}
}
/*Responsive-Mobile*/
@media only screen and (max-width: 600px) and (min-width: 320px) {
  table.row {width: 100%!important;max-width: 100%!important;}
  td.row {width: 100%!important;max-width: 100%!important;}
  .img-responsive img {width:100%!important;max-width: 100%!important;height: auto!important;margin: auto;}
  .center-float {float: none!important;margin:auto!important;}
  .center-text{text-align: center!important;}
  .container-padding {width: 100%!important;padding-left: 15px!important;padding-right: 15px!important;}
  .container-padding10 {width: 100%!important;padding-left: 10px!important;padding-right: 10px!important;}
  .hide-mobile {display: none!important;}
  .menu-container {text-align: center !important;}
  .autoheight {height: auto!important;}
  .m-padding-10 {margin: 10px 0!important;}
  .m-padding-15 {margin: 15px 0!important;}
  .m-padding-20 {margin: 20px 0!important;}
  .m-padding-30 {margin: 30px 0!important;}
  .m-padding-40 {margin: 40px 0!important;}
  .m-padding-50 {margin: 50px 0!important;}
  .m-padding-60 {margin: 60px 0!important;}
  .m-padding-top10 {margin: 30px 0 0 0!important;}
  .m-padding-top15 {margin: 15px 0 0 0!important;}
  .m-padding-top20 {margin: 20px 0 0 0!important;}
  .m-padding-top30 {margin: 30px 0 0 0!important;}
  .m-padding-top40 {margin: 40px 0 0 0!important;}
  .m-padding-top50 {margin: 50px 0 0 0!important;}
  .m-padding-top60 {margin: 60px 0 0 0!important;}
  .m-height10 {font-size:10px!important;line-height:10px!important;height:10px!important;}
  .m-height15 {font-size:15px!important;line-height:15px!important;height:15px!important;}
  .m-height20 {font-size:20px!important;line-height:20px!important;height:20px!important;}
  .m-height25 {font-size:25px!important;line-height:25px!important;height:25px!important;}
  .m-height30 {font-size:30px!important;line-height:30px!important;height:30px!important;}
  .radius6 {border-radius: 6px!important;}
  .fade-white {background-color: rgba(255, 255, 255, 0.8)!important;}
  .rwd-on-mobile {display: inline-block!important;padding: 5px!important;}
  .center-on-mobile {text-align: center!important;}
  .rwd-col {width:100%!important;max-width:100%!important;display:inline-block!important;}
}
</style>
<style type="text/css" class="export-delete"> 
  .composer--mobile table.row {width: 100%!important;max-width: 100%!important;}
  .composer--mobile td.row {width: 100%!important;max-width: 100%!important;}
  .composer--mobile .img-responsive img {width:100%!important;max-width: 100%!important;height: auto!important;margin: auto;}
  .composer--mobile .center-float {float: none!important;margin:auto!important;}
  .composer--mobile .center-text{text-align: center!important;}
  .composer--mobile .container-padding {width: 100%!important;padding-left: 15px!important;padding-right: 15px!important;}
  .composer--mobile .container-padding10 {width: 100%!important;padding-left: 10px!important;padding-right: 10px!important;}
  .composer--mobile .hide-mobile {display: none!important;}
  .composer--mobile .menu-container {text-align: center !important;}
  .composer--mobile .autoheight {height: auto!important;}
  .composer--mobile .m-padding-10 {margin: 10px 0!important;}
  .composer--mobile .m-padding-15 {margin: 15px 0!important;}
  .composer--mobile .m-padding-20 {margin: 20px 0!important;}
  .composer--mobile .m-padding-30 {margin: 30px 0!important;}
  .composer--mobile .m-padding-40 {margin: 40px 0!important;}
  .composer--mobile .m-padding-50 {margin: 50px 0!important;}
  .composer--mobile .m-padding-60 {margin: 60px 0!important;}
  .composer--mobile .m-padding-top10 {margin: 30px 0 0 0!important;}
  .composer--mobile .m-padding-top15 {margin: 15px 0 0 0!important;}
  .composer--mobile .m-padding-top20 {margin: 20px 0 0 0!important;}
  .composer--mobile .m-padding-top30 {margin: 30px 0 0 0!important;}
  .composer--mobile .m-padding-top40 {margin: 40px 0 0 0!important;}
  .composer--mobile .m-padding-top50 {margin: 50px 0 0 0!important;}
  .composer--mobile .m-padding-top60 {margin: 60px 0 0 0!important;}
  .composer--mobile .m-height10 {font-size:10px!important;line-height:10px!important;height:10px!important;}
  .composer--mobile .m-height15 {font-size:15px!important;line-height:15px!important;height:15px!important;}
  .composer--mobile .m-height20 {font-srobotoize:20px!important;line-height:20px!important;height:20px!important;}
  .composer--mobile .m-height25 {font-size:25px!important;line-height:25px!important;height:25px!important;}
  .composer--mobile .m-height30 {font-size:30px!important;line-height:30px!important;height:30px!important;}
  .composer--mobile .radius6 {border-radius: 6px!important;}
  .composer--mobile .fade-white {background-color: rgba(255, 255, 255, 0.8)!important;}
  .composer--mobile .rwd-on-mobile {display: inline-block!important;padding: 5px!important;}
  .composer--mobile .center-on-mobile {text-align: center!important;}
  .composer--mobile .rwd-col {width:100%!important;max-width:100%!important;display:inline-block!important;}
</style>
</head>

<body data-bgcolor="Body" style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" bgcolor="#FFFFFF">

<span class="preheader-text" data-preheader-text style="color: transparent; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; visibility: hidden; width: 0; display: none; mso-hide: all;"></span>

<!-- Preheader white space hack -->
<div style="display: none; max-height: 0px; overflow: hidden;">
&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
</div>

<div data-primary-font="Barlow" data-secondary-font="Rubik" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></div>

<table border="0" align="center" cellpadding="0" cellspacing="0" width="100%" style="width:100%;max-width:100%;">
  <tr><!-- Outer Table -->
    <td align="center" data-bgcolor="Body" bgcolor="#FFFFFF" data-composer>


<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="blue-logo">
  <!-- blue-logo -->
  <tr>
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="BgColor" class="container-padding">

<!-- Content -->
<table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr data-element="blue-logo" data-label="Logo">
    <td align="center" class="center-text">
      <img style="width:420px;border:0px;display: inline!important;" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Logo_Name.jpg" width="220" border="0" editable="true" data-icon data-image-edit data-url data-label="Logo" data-image-width alt="logo"> 
    </td>
  </tr>
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>
<!-- Content -->

    </td>
  </tr>
  <!-- blue-logo -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" width="640" style="width:640px;max-width:640px;" data-module="blue-header">
  <!-- blue-header -->
  <tr>
    <td align="center" class="img-responsive container-padding">
      <img class="auto-width" style="display:block;width:100%;max-width:100%;border:0px;" data-image-edit data-url data-label="Header image" width="640" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Welcome.jpg" border="0" editable="true" alt="picture">
    </td>
  </tr>
  <!-- blue-header -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="blue-preface-1">
  <!-- blue-preface-1 -->
  <tr>
    <td align="center" bgcolor="#FFFFFF{{name}}" data-bgcolor="BgColor" class="container-padding">

<table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="inner-table row" width="580" style="width:580px;max-width:580px;">
  <tr>
    <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr>
    <td align="center" data-bgcolor="BgColor" bgcolor="#FFFFFF">
      <!-- content -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
        <tr data-element="blue-subline" data-label="Sublines">
          <td class="center-text" data-text-style="Sublines" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:900;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:1px;">
              <singleline>
                <div mc:edit data-text-edit>
                  THANKS FOR JOINING US
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-headline" data-label="Headlines">
          <td class="center-text" data-text-style="Headlines" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:48px;line-height:54px;font-weight:900;font-style:normal;color:#222222;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Welcome aboard {{name}}!
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-headline" data-label="Headlines">
          <td height="15" style="font-size:15px;line-height:15px;" data-height="Spacing under headline">&nbsp;</td>
        </tr>
        <tr data-element="blue-paragraph" data-label="Paragraphs">
          <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#333333;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  We are thrilled to have you with us at EazyConnections! <br/>🌟 At Eazy Connections, we're redefining networking, making it effortless to connect with over 200 million prospects. Whether you're looking to expand your professional network, find new opportunities, or scout for talent, we've got you covered.
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-header-paragraph" data-label="Paragraphs">
          <td height="25" style="font-size:25px;line-height:25px;" data-height="Spacing under paragraph">&nbsp;</td>
        </tr>
        <tr data-element="blue-button" data-label="Buttons">
          <td align="center">
            <!-- Button -->
            <table border="0" cellspacing="0" cellpadding="0" role="presentation" align="center" class="center-float">
              <tr>
                <td align="center" data-border-radius-default="0,6,36" data-border-radius-custom="Buttons" data-bgcolor="Buttons" bgcolor="#7b68ee" style="border-radius: 0px;">
            <!--[if (gte mso 9)|(IE)]>
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td align="center" width="35"></td>
                  <td align="center" height="50" style="height:50px;">
                  <![endif]-->
                    <singleline>
                      <a href="#" mc:edit data-button data-text-style="Buttons" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:16px;line-height:20px;font-weight:700;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding: 15px 35px 15px 35px;display: inline-block;"><span>GET STARTED</span></a>
                    </singleline>
                  <!--[if (gte mso 9)|(IE)]>
                  </td>
                  <td align="center" width="35"></td>
                </tr>
              </table>
            <![endif]-->
                </td>
              </tr>
            </table>
            <!-- Buttons -->
          </td>
        </tr>
      </table>
      <!-- content -->
    </td>
  </tr>
  <tr>
    <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>

    </td>
  </tr>
  <!-- blue-preface-1 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="blue-basic-message-1">
  <!-- blue-basic-message-1 -->
  <tr>
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="BgColor" class="container-padding">

<!-- Content -->
<table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" class="inner-table row" role="presentation" width="580" style="width:580px;max-width:580px;">
  <tr>
    <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr data-element="blue-basic-message-1-titles" data-label="Titles">
    <td class="center-text" data-text-style="Titles" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:36px;line-height:42px;font-weight:700;font-style:normal;color:#222222;text-decoration:none;letter-spacing:0px;">
        <singleline>
          <div mc:edit data-text-edit>
            Start your journey
          </div>
        </singleline>
    </td>
  </tr>
  <tr data-element="blue-basic-message-1-titles" data-label="Titles">
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing under titles">&nbsp;</td>
  </tr>
  <tr>
    <td align="center">

<!-- rwd-col -->
<table border="0" cellpadding="0" cellspacing="0" align="center" width="75%" style="width:75%;max-width:75%;">
  <tr>
    <td class="rwd-col" align="center" width="33.33%" style="width:33.33%;max-width:33.33%;">

    <!-- column -->
    <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
      <tr>
        <td align="center" class="img-responsive">
          <img class="auto-width" style="display:block;width:100%;max-width:100%;border:0px;border-radius:100%;" data-image-edit data-url data-border-radius-default="0,6,36" data-border-radius-custom="Picture" data-label="Picture" width="160" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Unlock_Direct_Comm.jpeg" border="0" editable="true" alt="picture">
        </td>
      </tr>
    </table>
    <!-- column -->

    </td>
    <td class="rwd-col" align="center" width="4.17%" height="30" style="width:4.17%;max-width:4.17%;height:30px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="62.5%" style="width:62.5%;max-width:62.5%;">

      <!-- column -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="100%" style="width:100%;max-width:100%;">
        <tr data-element="blue-basic-message-1-titles" data-label="Titles">
          <td class="center-text" data-text-style="Titles" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;font-weight:700;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Unlock the Power of Direct Communication
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-1-titles" data-label="Titles">
          <td height="10" style="font-size:10px;line-height:10px;" data-height="Spacing under titles">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-1-paragraph" data-label="Paragraphs">
          <td class="center-text" data-text-style="Paragraphs" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#333333;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Dive into a world where connecting with potential partners, clients, or talents is not just easy, but also incredibly effective. With Eazy Connections, you're not just reaching out; you're making meaningful contacts that can propel your business and personal growth to new heights.
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-1-paragraph" data-label="Paragraphs">
          <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing under paragraphs">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-1-button" data-label="Links">
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" align="left" class="center-float">
              <tr data-element="blue-basic-message-1-button" data-label="Links">
                <td align="left" class="center-text" data-border-color="Underline border" style="border-bottom: 4px solid #7b68ee;">
                  <!-- Links -->
                    <singleline>
                      <a href="#" mc:edit data-button data-text-style="Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:13px;line-height:24px;font-weight:500;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>LEARN MORE</span></a>
                    </singleline>
                  <!-- Links -->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- column -->

    </td>
  </tr>
</table>
<!-- rwd-col -->

    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>
<!-- Content -->

    </td>
  </tr>
  <!-- blue-basic-message-1 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="blue-basic-message-2">
  <!-- blue-basic-message-2 -->
  <tr>
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="BgColor" class="container-padding">

<!-- Content -->
<table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" class="inner-table row" role="presentation" width="580" style="width:580px;max-width:580px;">
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr>
    <td align="center">

<!-- rwd-col -->
<table border="0" cellpadding="0" cellspacing="0" align="center" width="75%" style="width:75%;max-width:75%;">
  <tr>
    <td class="rwd-col" align="center" width="33.33%" style="width:33.33%;max-width:33.33%;">

    <!-- column -->
    <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
      <tr>
        <td align="center" class="img-responsive">
          <img class="auto-width" style="display:block;width:100%;max-width:100%;border:0px;border-radius:100%;" data-image-edit data-url data-border-radius-default="0,6,36" data-border-radius-custom="Picture" data-label="Picture" width="160" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Monthly_Boost_Opp.jpeg" border="0" editable="true" alt="picture">
        </td>
      </tr>
    </table>
    <!-- column -->

    </td>
    <td class="rwd-col" align="center" width="4.17%" height="30" style="width:4.17%;max-width:4.17%;height:30px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="62.5%" style="width:62.5%;max-width:62.5%;">      

      <!-- column -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="100%" style="width:100%;max-width:100%;">
        <tr data-element="blue-basic-message-2-titles" data-label="Titles">
          <td class="center-text" data-text-style="Titles" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;font-weight:700;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Your Monthly Boost of Opportunity
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-2-titles" data-label="Titles">
          <td height="10" style="font-size:10px;line-height:10px;" data-height="Spacing under titles">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-2-paragraph" data-label="Paragraphs">
          <td class="center-text" data-text-style="Paragraphs" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#333333;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Remember, every month, we equip you with 50 complimentary contacts to ensure your networking never hits a pause. It's our way of saying thank you for choosing Eazy Connections and ensuring your path to success is uninterrupted.
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-2-paragraph" data-label="Paragraphs">
          <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing under paragraphs">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-2-button" data-label="Links">
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" align="left" class="center-float">
              <tr data-element="blue-basic-message-2-button" data-label="Links">
                <td align="left" class="center-text" data-border-color="Underline border" style="border-bottom: 4px solid #7b68ee;">
                  <!-- Links -->
                    <singleline>
                      <a href="#" mc:edit data-button data-text-style="Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:13px;line-height:24px;font-weight:500;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>LEARN MORE</span></a>
                    </singleline>
                  <!-- Links -->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- column -->

    </td>
  </tr>
</table>
<!-- rwd-col -->

    </td>
  </tr>
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>
<!-- Content -->

    </td>
  </tr>
  <!-- blue-basic-message-2 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="blue-basic-message-3">
  <!-- blue-basic-message-3 -->
  <tr>
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="BgColor" class="container-padding">

<!-- Content -->
<table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" class="inner-table row" role="presentation" width="580" style="width:580px;max-width:580px;">
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr>
    <td align="center">

<!-- rwd-col -->
<table border="0" cellpadding="0" cellspacing="0" align="center" width="75%" style="width:75%;max-width:75%;">
  <tr>
    <td class="rwd-col" align="center" width="33.33%" style="width:33.33%;max-width:33.33%;">

    <!-- column -->
    <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
      <tr>
        <td align="center" class="img-responsive">
          <img class="auto-width" style="display:block;width:100%;max-width:100%;border:0px;border-radius:100%;" data-image-edit data-url data-border-radius-default="0,6,36" data-border-radius-custom="Picture" data-label="Picture" width="160" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Connect_with_prospects.jpeg" border="0" editable="true" alt="picture">
        </td>
      </tr>
    </table>
    <!-- column -->

    </td>
    <td class="rwd-col" align="center" width="4.17%" height="30" style="width:4.17%;max-width:4.17%;height:30px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="62.5%" style="width:62.5%;max-width:62.5%;">

      <!-- column -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="100%" style="width:100%;max-width:100%;">
        <tr data-element="blue-basic-message-1-titles" data-label="Titles">
          <td class="center-text" data-text-style="Titles" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;font-weight:700;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Connect with Over 200 Million Prospects
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-1-titles" data-label="Titles">
          <td height="10" style="font-size:10px;line-height:10px;" data-height="Spacing under titles">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-1-paragraph" data-label="Paragraphs">
          <td class="center-text" data-text-style="Paragraphs" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#333333;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Whether you're a CEO, founder, sales guru, recruiter, or venture capitalist, our extensive database is your goldmine. With access to over 200 million prospects, your next game-changing connection is just a click away.
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-1-paragraph" data-label="Paragraphs">
          <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing under paragraphs">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-1-button" data-label="Links">
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" align="left" class="center-float">
              <tr data-element="blue-basic-message-1-button" data-label="Links">
                <td align="left" class="center-text" data-border-color="Underline border" style="border-bottom: 4px solid #7b68ee;">
                  <!-- Links -->
                    <singleline>
                      <a href="#" mc:edit data-button data-text-style="Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:13px;line-height:24px;font-weight:500;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>LEARN MORE</span></a>
                    </singleline>
                  <!-- Links -->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- column -->

    </td>
  </tr>
</table>
<!-- rwd-col -->

    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>
<!-- Content -->

    </td>
  </tr>
  <!-- blue-basic-message-1 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="blue-basic-message-2">
  <!-- blue-basic-message-2 -->
  <tr>
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="BgColor" class="container-padding">

<!-- Content -->
<table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" class="inner-table row" role="presentation" width="580" style="width:580px;max-width:580px;">
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr>
    <td align="center">

<!-- rwd-col -->
<table border="0" cellpadding="0" cellspacing="0" align="center" width="75%" style="width:75%;max-width:75%;">
  <tr>
    <td class="rwd-col" align="center" width="33.33%" style="width:33.33%;max-width:33.33%;">

    <!-- column -->
    <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
      <tr>
        <td align="center" class="img-responsive">
          <img class="auto-width" style="display:block;width:100%;max-width:100%;border:0px;border-radius:100%;" data-image-edit data-url data-border-radius-default="0,6,36" data-border-radius-custom="Picture" data-label="Picture" width="160" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Accuracy.jpeg" border="0" editable="true" alt="picture">
        </td>
      </tr>
    </table>
    <!-- column -->

    </td>
    <td class="rwd-col" align="center" width="4.17%" height="30" style="width:4.17%;max-width:4.17%;height:30px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="62.5%" style="width:62.5%;max-width:62.5%;">

      <!-- column -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="100%" style="width:100%;max-width:100%;">
        <tr data-element="blue-basic-message-3-titles" data-label="Titles">
          <td class="center-text" data-text-style="Titles" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;font-weight:700;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  Accuracy You Can Trust
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-3-titles" data-label="Titles">
          <td height="10" style="font-size:10px;line-height:10px;" data-height="Spacing under titles">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-3-paragraph" data-label="Paragraphs">
          <td class="center-text" data-text-style="Paragraphs" align="left" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#333333;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  We take pride in the precision of our service. Our commitment to delivering the highest accuracy rate in the industry means you can trust us to connect you with the right people, right away.
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="blue-basic-message-3-paragraph" data-label="Paragraphs">
          <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing under paragraphs">&nbsp;</td>
        </tr>
        <tr data-element="blue-basic-message-3-button" data-label="Links">
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" align="left" class="center-float">
              <tr data-element="blue-basic-message-3-button" data-label="Links">
                <td align="left" class="center-text" data-border-color="Underline border" style="border-bottom: 4px solid #7b68ee;">
                  <!-- Links -->
                    <singleline>
                      <a href="#" mc:edit data-button data-text-style="Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:13px;line-height:24px;font-weight:500;font-style:normal;color:#7b68ee;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>LEARN MORE</span></a>
                    </singleline>
                  <!-- Links -->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- column -->

    </td>
  </tr>
</table>
<!-- rwd-col -->

    </td>
  </tr>
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>
<!-- Content -->

    </td>
  </tr>
  <!-- blue-basic-message-3 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="blue-cta-1">
  <!-- blue-cta-1 -->
  <tr>
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="BgColor" class="container-padding">

    <!-- Button -->
    <table border="0" cellspacing="0" cellpadding="0" role="presentation" align="center" class="center-float">
      <tr>
        <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing top">&nbsp;</td>
      </tr>
      <tr>
        <!-- I COMMENTED HERE line 671,678-680,683--> 
        <!-- <td align="center" data-border-radius-default="0,6,36" data-border-radius-custom="Buttons" data-bgcolor="Buttons" bgcolor="#7b68ee" style="border-radius: 0px;"> -->
    <!--[if (gte mso 9)|(IE)]>
      <table border="0" cellpadding="0" cellspacing="0" align="center">
        <tr>
          <td align="center" width="35"></td>
          <td align="center" height="50" style="height:50px;">
          <![endif]-->
            <!-- <singleline>
              <a href="#" mc:edit data-button data-text-style="Buttons" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:16px;line-height:20px;font-weight:700;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding: 15px 35px 15px 35px;display: inline-block;"><span>Tutorials & Tips</span></a>
            </singleline> -->
          <!--[if (gte mso 9)|(IE)]>
          </td>
          <td align="center" width="35"></td>
        </tr>
      </table>
    <![endif]-->
        </td>
      </tr>
      <tr>
        <td height="60" style="font-size:60px;line-height:60px;" data-height="Spacing bottom">&nbsp;</td>
      </tr>
    </table>
    <!-- Buttons -->

    </td>
  </tr>
  <!-- blue-cta-1 -->
</table>

<table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;" data-module="blue-footer">
  <!-- blue-footer -->
  <tr>
    <td align="center" bgcolor="#F8F8F8" data-bgcolor="BgColor" data-border-color="Footer Border Color" class="container-padding" style="border-top: 10px solid #F1F1F1;">
      
<!-- Content -->
<table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="520" style="width:520px;max-width:520px;">
  <tr>
    <td height="60" style="font-size:60px;line-height:60px;" data-height="Footer spacing top">&nbsp;</td>
  </tr>
  <tr data-element="blue-footer-titles" data-label="Titles">
    <td class="center-text" data-text-style="Titles" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:21px;line-height:28px;font-weight:700;font-style:normal;color:#444444;text-decoration:none;letter-spacing:0px;">
        <singleline>
          <div mc:edit data-text-edit>
            Download our app
          </div>
        </singleline>
    </td>
  </tr>
  <tr data-element="blue-footer-titles" data-label="Titles">
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing under titles">&nbsp;</td>
  </tr>
  <tr data-element="blue-footer-buttons" data-label="Buttons">
    <td align="center">
      <!-- Buttons -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="100%" style="width:100%;max-width:100%;">
        <tr>
          <td align="center">
            <!-- column -->
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr data-element="blue-footer-icon" data-label="Buttons">
                <td align="center">
                  <img style="display:block;width:100%;max-width:117px;border:0px;" data-image-edit data-url data-label="App Store" width="117" src="https://ez-staging.s3.ap-south-1.amazonaws.com/App-Store.png" border="0" editable="true" alt="icon">
                </td>
                <td width="20" style="width: 20px;"></td>
                <td align="center">
                  <img style="display:block;width:100%;max-width:117px;border:0px;" data-image-edit data-url data-label="Google play" width="117" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Google-play.png" border="0" editable="true" alt="icon"></td>
              </tr>
            </table>
            <!-- column -->
          </td>
        </tr>
      </table>
      <!-- Buttons -->
    </td>
  </tr>
  <tr data-element="blue-footer-buttons" data-label="Buttons">
    <td height="60" style="font-size:60px;line-height:60px;" data-height="Spacing under buttons">&nbsp;</td>
  </tr>
  <tr data-element="blue-footer-links" data-label="Footer Links">
    <td align="center">
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
        <tr class="center-on-mobile">
          <td data-element="blue-footer-1st-link" data-label="1st Link" data-text-style="Footer Links" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              <singleline>
                <a href="#" mc:edit data-button data-text-style="Footer Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>HOME</span></a>
              </singleline>
            <!-- Links -->
          </td>
          <td data-element="blue-footer-gap-1" data-label="1st Gap" class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td data-element="blue-footer-2nd-link" data-label="2nd Link" data-text-style="Footer Links" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              <singleline>
                <a href="#" mc:edit data-button data-text-style="Footer Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>BLOG</span></a>
              </singleline>
            <!-- Links -->
          </td>
          <td data-element="blue-footer-gap-2" data-label="2nd Gap" class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td data-element="blue-footer-3rd-link" data-label="3rd Link" data-text-style="Footer Links" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              <singleline>
                <a href="#" mc:edit data-button data-text-style="Footer Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>CONTACT US</span></a>
              </singleline>
            <!-- Links -->
          </td>
          <td data-element="blue-footer-gap-3" data-label="3rd Gap" class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td data-element="blue-footer-4rd-link" data-label="4rd Link" data-text-style="Footer Links" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              <singleline>
                <a href="#" mc:edit data-button data-text-style="Footer Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>PRIVACY POLICY</span></a>
              </singleline>
            <!-- Links -->
          </td>
          <td data-element="blue-footer-gap-3" data-label="4th Gap" class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td data-element="blue-footer-5th-link" data-label="5th Link" data-text-style="Footer Links" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              <singleline>
                <a href="#" mc:edit data-button data-text-style="Footer Links" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>TERMS</span></a>
              </singleline>
            <!-- Links -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr data-element="blue-footer-links" data-label="Footer Links">
    <td height="60" style="font-size:60px;line-height:60px;" data-height="Spacing under footer links">&nbsp;</td>
  </tr>
  <tr data-element="blue-footer-social-icons" data-label="Social Icons">
    <td align="center">
      <!-- Social Icons -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
        <tr>
          <td align="center">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td data-element="blue-footer-facebook" data-label="Facebook" class="rwd-on-mobile" align="center" valign="middle" height="36" style="height: 36px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="10"></td>
                      <td align="center">
                        <img style="width:36px;border:0px;display: inline!important;" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Facebook.png" width="36" border="0" editable="true" data-icon data-image-edit data-url data-label="Facebook" data-image-width alt="icon">
                      </td>
                      <td width="10"></td>
                    </tr>
                  </table>
                </td>
                <td data-element="blue-footer-instagram" data-label="Instagram" class="rwd-on-mobile" align="center" valign="middle" height="36" style="height: 36px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="10"></td>
                      <td align="center">
                        <img style="width:36px;border:0px;display: inline!important;" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Instagram.png" width="36" border="0" editable="true" data-icon data-image-edit data-url data-label="Instagram" data-image-width alt="icon">
                      </td>
                      <td width="10"></td>
                    </tr>
                  </table>
                </td>
                <td data-element="blue-footer-twitter" data-label="Twitter" class="rwd-on-mobile" align="center" valign="middle" height="36" style="height: 36px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="10"></td>
                      <td align="center">
                        <img style="width:36px;border:0px;display: inline!important;" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Twitter.png" width="36" border="0" editable="true" data-icon data-image-edit data-url data-label="Twitter" data-image-width alt="icon">
                      </td>
                      <td width="10"></td>
                    </tr>
                  </table>
                </td>
                <td data-element="blue-footer-pinterest" data-label="Pinterest" class="rwd-on-mobile" align="center" valign="middle" height="36" style="height: 36px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="10"></td>
                      <td align="center">
                        <img style="width:36px;border:0px;display: inline!important;" src="https://ez-staging.s3.ap-south-1.amazonaws.com/Pinterest.png" width="36" border="0" editable="true" data-icon data-image-edit data-url data-label="Pinterest" data-image-width alt="icon">
                      </td>
                      <td width="10"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- Social Icons -->
    </td>
  </tr>
  <tr data-element="blue-footer-social-icons" data-label="Social Icons">
    <td height="60" style="font-size:60px;line-height:60px;" data-height="Spacing under social icons">&nbsp;</td>
  </tr>
  <tr data-element="blue-footer-paragraphs" data-label="Paragraphs">
    <td align="center">
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="480" style="width:480px;max-width:480px;">
        <tr>
          <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <multiline>
              <div mc:edit data-text-edit>
                2021 Blue Inc. All Rights Reserved.<br>
                Address name St. 24, City Name, State, Country Name
              </div>
            </multiline>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr data-element="blue-footer-paragraphs" data-label="Paragraphs">
    <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing above tags">&nbsp;</td>
  </tr>
  <tr data-element="blue-footer-tags" data-label="Tags">
    <td align="center">
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
        <tr class="center-on-mobile">
          <td data-element="blue-footer-unsubscribe" data-label="Unsubscribe" data-text-style="Paragraphs" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <unsubscribe href="#" data-mergetag="Unsubscribe" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;font-weight:300;line-height:24px;color:#666666;text-decoration:none;">Unsubscribe</unsubscribe>
          </td>
          <td data-element="blue-footer-gap-1" data-label="1st Gap" class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td data-element="blue-footer-webversion" data-label="Web version" data-text-style="Paragraphs" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <webversion href="#" data-mergetag="Web version" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;font-weight:300;line-height:24px;color:#666666;text-decoration:none;">View on browser</webversion>
          </td>
          <td data-element="blue-footer-gap-2" data-label="2nd Gap" class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text" data-text-style="Paragraphs" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td data-element="blue-footer-forward" data-label="Forward" data-text-style="Paragraphs" class="rwd-on-mobile center-text" align="center" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
            <forward href="#" data-mergetag="Forward" style="font-family:'Barlow',Arial,Helvetica,sans-serif;font-size:14px;font-weight:300;line-height:24px;color:#666666;text-decoration:none;">Forward</forward>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td height="40" style="font-size:40px;line-height:40px;" data-height="Footer spacing bottom">&nbsp;</td>
  </tr>
</table>
<!-- Content -->

    </td>
  </tr>
  <!-- blue-footer -->
</table>

    </td>
  </tr><!-- Outer-Table -->
</table>

</body>
</html>

`;

export const RESET_PASSWORD_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
      color: #000000;
    "
  >
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #ffffff;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >

                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                <h1
                                  style="
                                    margin: 0px;
                                    line-height: 220%;
                                    text-align: center;
                                    word-wrap: break-word;
                                    font-family: 'Lobster Two', cursive;
                                    font-size: 40px;
                                    font-weight: 700;
                                  "
                                >
                                  <span style="line-height: 88px">On Day</span>
                                </h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 400px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >

                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 400px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #ffffff;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="https://mailsend-email-assets.mailtrap.io/clep2kh8rln72w7wsh6ltoineo7g.png"
                                          alt=""
                                          title=""
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 100%;
                                            max-width: 380px;
                                          "
                                          width="380"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-family: 'Cabin', sans-serif;
                                    font-size: 24px;
                                    font-weight: 700;
                                    color: #292929;
                                    line-height: 90%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 90%">
                                    Forgot your password ?
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 16px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-family: 'Montserrat', sans-serif;
                                    font-size: 14px;
                                    line-height: 180%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 180%">
                                    That's Okay, it happens! Click on the button
                                    below to reset the password.
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div align="center">
                                  <a
                                    href="{resetURL}"
                                    target="_blank"
                                    class="v-button"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #050505;
                                      border-radius: 4px;
                                      -webkit-border-radius: 4px;
                                      -moz-border-radius: 4px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                      font-family: 'Raleway', sans-serif;
                                      font-size: 14px;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 130%;
                                      "
                                      >Reset your password</span
                                    >
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 400px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 400px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                     <div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`
