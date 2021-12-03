<?php

namespace App\Models;

class ConstantModel
{
    const ADMIN = 1;
    const MEMBER = 2;
    const MEMBER_ADMIN = 3;
    public static $PERMISSION = [
        'access',
        'create',
        'edit',
        'show',
        'delete'
    ];

    public static $pagination = 20;

    public static $MAPPING_PRIVILEGE = [
        self::MEMBER => 0,
        self::MEMBER_ADMIN => 0,
        self::ADMIN => 1
    ];

    public static $MAPPING_USER = [
        self::ADMIN => 0,
        self::MEMBER => 0,
        self::MEMBER_ADMIN => 1
    ];

    public static $SENSOR_TYPE = [
        '01' => '01 PH',
        '02' => '02 EC',
        '03' => '03 ORP',
        '04' => '04 温度 ',
        '05' => '05 圧力 ',
        '06' => '06 電流',
        '07' => '07 電圧',
        '08' => '08 電力',
        '11' => '11 ステータス ',
        '99' => '99 エラー'
    ];

    public static $ALERT_STATUS = [
        1 => '異常通知',
        2 => '復帰通知'
    ];

    public static $system_setting = [
        'logo',
        'logo_url',
        'alert_temp',
        'end_alert_temp',
        'alert_temp_c',
        'end_alert_temp_c'
    ];

    public static $system_info = 'system_info';

    public static $DEFAULT_COUNT_X_TIME = [
        '01' => '10',
        '02' => '10',
        '03' => '10',
        '04' => '10',
        '05' => '10',
        '06' => '10',
        '07' => '10',
        '08' => '10',
        '11' => '10',
        '99' => '10',
    ];

    public static $DEFAULT_COUNT_X_DAY = [
        '01' => '7',
        '02' => '7',
        '03' => '7',
        '04' => '7',
        '05' => '7',
        '06' => '7',
        '07' => '7',
        '08' => '7',
        '11' => '7',
        '99' => '7',
    ];

    public static $TWO_LINE_CSV_HEADER = [
        '日付', '時刻', '設備名', 'ユニットID', 'センサー名', '上限値', '下限値', '測定値'
    ];

    public static $CORRELATION_CSV_HEADER = [
        '日付', '時刻', '設備名', 'ユニット名1', 'センサー名1', 'センサー種別1', '測定値1', 'ユニット名2', 'センサー名20', 'センサー種別2', '測定値2'
    ];

    public static $NOTIFICATION__SENSOR_TYPE = [
        'status' => '11',
        'error' => '99'
    ];

    public static $DELETE_FLAG = '00000000000000';

    public static $color_setting = [
        'engineering_status_color',
        'miss_data_color',
        'out_control_limit_color',
        'out_limit_color',
        'pause_status_color',
        'product_status_color',
        'standby_status_color',
        'error_status_color'
    ];
}
