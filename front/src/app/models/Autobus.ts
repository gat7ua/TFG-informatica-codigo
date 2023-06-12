export interface Autobus {
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
    esta_salida?: number;
    esta_llegad?: number;
    id_prov?: number;
    precio_unitario?: number; 
    uds_disponibles?: number;
    uds_ocup?: number;
    esta_sal_nombre?: string;
    esta_lleg_nombre?: string;
    nombre_prov?: string;
    sede_prov?: string;
    ida?: string;
}