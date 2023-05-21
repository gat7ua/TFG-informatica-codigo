export interface Vuelo {
    id_prod?: number;
    fecha?: string;
    duracion?: string;
    num_asi_tur?: number;
    num_asi_buss?: number;
    num_asi_prim?: number;
    porc_buss?: number;
    porc_prim?: number;
    ocup_asi_tur?: number;
    ocup_asi_buss?: number;
    ocup_asi_prim?: number;
    aero_salida?: number;
    aero_llegad?: number;
    id_prov?: number;
    precio_unitario?: number; 
    uds_disponibles?: number;
    uds_ocup?: number;
    aero_sal_nombre?: string;
    cod_iata_sal?: string;
    aero_lleg_nombre?: string;
    cod_iata_lleg?: string;
    nombre_prov?: string;
    sede_prov?: string;
    ida?: string;
}