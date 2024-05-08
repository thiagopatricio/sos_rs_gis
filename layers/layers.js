var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CheiasemPortoAlegreInundaocomnvel550cm55m_1 = new ol.format.GeoJSON();
var features_CheiasemPortoAlegreInundaocomnvel550cm55m_1 = format_CheiasemPortoAlegreInundaocomnvel550cm55m_1.readFeatures(json_CheiasemPortoAlegreInundaocomnvel550cm55m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheiasemPortoAlegreInundaocomnvel550cm55m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheiasemPortoAlegreInundaocomnvel550cm55m_1.addFeatures(features_CheiasemPortoAlegreInundaocomnvel550cm55m_1);
var lyr_CheiasemPortoAlegreInundaocomnvel550cm55m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheiasemPortoAlegreInundaocomnvel550cm55m_1, 
                style: style_CheiasemPortoAlegreInundaocomnvel550cm55m_1,
                interactive: true,
                title: '<img src="styles/legend/CheiasemPortoAlegreInundaocomnvel550cm55m_1.png" /> Cheias em Porto Alegre — Inundação com nível 550 cm (5.5m)'
            });
var format_FiosAltaTenso_2 = new ol.format.GeoJSON();
var features_FiosAltaTenso_2 = format_FiosAltaTenso_2.readFeatures(json_FiosAltaTenso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiosAltaTenso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiosAltaTenso_2.addFeatures(features_FiosAltaTenso_2);
var lyr_FiosAltaTenso_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiosAltaTenso_2, 
                style: style_FiosAltaTenso_2,
                interactive: true,
                title: '<img src="styles/legend/FiosAltaTenso_2.png" /> Fios Alta Tensão'
            });
var format_FiosMediaTenso_3 = new ol.format.GeoJSON();
var features_FiosMediaTenso_3 = format_FiosMediaTenso_3.readFeatures(json_FiosMediaTenso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiosMediaTenso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiosMediaTenso_3.addFeatures(features_FiosMediaTenso_3);
var lyr_FiosMediaTenso_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiosMediaTenso_3, 
                style: style_FiosMediaTenso_3,
                interactive: true,
                title: '<img src="styles/legend/FiosMediaTenso_3.png" /> Fios Media Tensão'
            });
var format_FiosBaixaTenso_4 = new ol.format.GeoJSON();
var features_FiosBaixaTenso_4 = format_FiosBaixaTenso_4.readFeatures(json_FiosBaixaTenso_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiosBaixaTenso_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiosBaixaTenso_4.addFeatures(features_FiosBaixaTenso_4);
var lyr_FiosBaixaTenso_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiosBaixaTenso_4, 
                style: style_FiosBaixaTenso_4,
                interactive: true,
                title: '<img src="styles/legend/FiosBaixaTenso_4.png" /> Fios Baixa Tensão'
            });
var format_Postes_5 = new ol.format.GeoJSON();
var features_Postes_5 = format_Postes_5.readFeatures(json_Postes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postes_5.addFeatures(features_Postes_5);cluster_Postes_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Postes_5
});
var lyr_Postes_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Postes_5, 
                style: style_Postes_5,
                interactive: true,
                title: '<img src="styles/legend/Postes_5.png" /> Postes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CheiasemPortoAlegreInundaocomnvel550cm55m_1.setVisible(true);lyr_FiosAltaTenso_2.setVisible(true);lyr_FiosMediaTenso_3.setVisible(true);lyr_FiosBaixaTenso_4.setVisible(true);lyr_Postes_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CheiasemPortoAlegreInundaocomnvel550cm55m_1,lyr_FiosAltaTenso_2,lyr_FiosMediaTenso_3,lyr_FiosBaixaTenso_4,lyr_Postes_5];
lyr_CheiasemPortoAlegreInundaocomnvel550cm55m_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'DN': 'DN', });
lyr_FiosAltaTenso_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON_1': 'PN_CON_1', 'PN_CON_2': 'PN_CON_2', 'CTAT': 'CTAT', 'CT_COD_OP': 'CT_COD_OP', 'CONJ': 'CONJ', 'ARE_LOC': 'ARE_LOC', 'DIST': 'DIST', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'FAS_CON': 'FAS_CON', 'TIP_INST': 'TIP_INST', 'TIP_CND': 'TIP_CND', 'POS': 'POS', 'ODI': 'ODI', 'TI': 'TI', 'CM': 'CM', 'SITCONT': 'SITCONT', 'COMP': 'COMP', 'DESCR': 'DESCR', 'Shape_Leng': 'Shape_Leng', });
lyr_FiosMediaTenso_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON_1': 'PN_CON_1', 'PN_CON_2': 'PN_CON_2', 'CTMT': 'CTMT', 'CT_COD_OP': 'CT_COD_OP', 'UNI_TR_AT': 'UNI_TR_AT', 'SUB': 'SUB', 'CONJ': 'CONJ', 'ARE_LOC': 'ARE_LOC', 'DIST': 'DIST', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'FAS_CON': 'FAS_CON', 'TIP_INST': 'TIP_INST', 'TIP_CND': 'TIP_CND', 'POS': 'POS', 'ODI': 'ODI', 'TI': 'TI', 'CM': 'CM', 'SITCONT': 'SITCONT', 'COMP': 'COMP', 'DESCR': 'DESCR', 'Shape_Leng': 'Shape_Leng', });
lyr_FiosBaixaTenso_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON_1': 'PN_CON_1', 'PN_CON_2': 'PN_CON_2', 'UNI_TR_MT': 'UNI_TR_MT', 'CTMT': 'CTMT', 'CT_COD_OP': 'CT_COD_OP', 'UNI_TR_AT': 'UNI_TR_AT', 'SUB': 'SUB', 'CONJ': 'CONJ', 'ARE_LOC': 'ARE_LOC', 'FAS_CON': 'FAS_CON', 'DIST': 'DIST', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'TIP_INST': 'TIP_INST', 'TIP_CND': 'TIP_CND', 'POS': 'POS', 'ODI': 'ODI', 'TI': 'TI', 'CM': 'CM', 'SITCONT': 'SITCONT', 'COMP': 'COMP', 'DESCR': 'DESCR', 'Shape_Leng': 'Shape_Leng', });
lyr_Postes_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'TIP_PN': 'TIP_PN', 'POS': 'POS', 'ESTR': 'ESTR', 'MAT': 'MAT', 'ESF': 'ESF', 'ALT': 'ALT', 'CONJ': 'CONJ', 'MUN': 'MUN', 'ODI': 'ODI', 'TI': 'TI', 'CM': 'CM', 'TUC': 'TUC', 'A1': 'A1', 'A2': 'A2', 'A3': 'A3', 'A4': 'A4', 'A5': 'A5', 'A6': 'A6', 'SITCONT': 'SITCONT', 'DESCR': 'DESCR', 'ARE_LOC': 'ARE_LOC', 'UAR': 'UAR', 'TIP_INST': 'TIP_INST', });
lyr_CheiasemPortoAlegreInundaocomnvel550cm55m_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_FiosAltaTenso_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON_1': 'TextEdit', 'PN_CON_2': 'TextEdit', 'CTAT': 'TextEdit', 'CT_COD_OP': 'TextEdit', 'CONJ': 'TextEdit', 'ARE_LOC': 'TextEdit', 'DIST': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'FAS_CON': 'TextEdit', 'TIP_INST': 'TextEdit', 'TIP_CND': 'TextEdit', 'POS': 'TextEdit', 'ODI': 'TextEdit', 'TI': 'TextEdit', 'CM': 'TextEdit', 'SITCONT': 'TextEdit', 'COMP': 'TextEdit', 'DESCR': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_FiosMediaTenso_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON_1': 'TextEdit', 'PN_CON_2': 'TextEdit', 'CTMT': 'TextEdit', 'CT_COD_OP': 'TextEdit', 'UNI_TR_AT': 'TextEdit', 'SUB': 'TextEdit', 'CONJ': 'TextEdit', 'ARE_LOC': 'TextEdit', 'DIST': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'FAS_CON': 'TextEdit', 'TIP_INST': 'TextEdit', 'TIP_CND': 'TextEdit', 'POS': 'TextEdit', 'ODI': 'TextEdit', 'TI': 'TextEdit', 'CM': 'TextEdit', 'SITCONT': 'TextEdit', 'COMP': 'TextEdit', 'DESCR': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_FiosBaixaTenso_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON_1': 'TextEdit', 'PN_CON_2': 'TextEdit', 'UNI_TR_MT': 'TextEdit', 'CTMT': 'TextEdit', 'CT_COD_OP': 'TextEdit', 'UNI_TR_AT': 'TextEdit', 'SUB': 'TextEdit', 'CONJ': 'TextEdit', 'ARE_LOC': 'TextEdit', 'FAS_CON': 'TextEdit', 'DIST': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'TIP_INST': 'TextEdit', 'TIP_CND': 'TextEdit', 'POS': 'TextEdit', 'ODI': 'TextEdit', 'TI': 'TextEdit', 'CM': 'TextEdit', 'SITCONT': 'TextEdit', 'COMP': 'TextEdit', 'DESCR': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Postes_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'TIP_PN': 'TextEdit', 'POS': 'TextEdit', 'ESTR': 'TextEdit', 'MAT': 'TextEdit', 'ESF': 'TextEdit', 'ALT': 'TextEdit', 'CONJ': 'TextEdit', 'MUN': 'TextEdit', 'ODI': 'TextEdit', 'TI': 'TextEdit', 'CM': 'TextEdit', 'TUC': 'TextEdit', 'A1': 'TextEdit', 'A2': 'TextEdit', 'A3': 'TextEdit', 'A4': 'TextEdit', 'A5': 'TextEdit', 'A6': 'TextEdit', 'SITCONT': 'TextEdit', 'DESCR': 'TextEdit', 'ARE_LOC': 'TextEdit', 'UAR': 'TextEdit', 'TIP_INST': 'TextEdit', });
lyr_CheiasemPortoAlegreInundaocomnvel550cm55m_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'DN': 'no label', });
lyr_FiosAltaTenso_2.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PN_CON_1': 'no label', 'PN_CON_2': 'no label', 'CTAT': 'no label', 'CT_COD_OP': 'no label', 'CONJ': 'no label', 'ARE_LOC': 'no label', 'DIST': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'FAS_CON': 'no label', 'TIP_INST': 'no label', 'TIP_CND': 'no label', 'POS': 'no label', 'ODI': 'no label', 'TI': 'no label', 'CM': 'no label', 'SITCONT': 'no label', 'COMP': 'no label', 'DESCR': 'no label', 'Shape_Leng': 'no label', });
lyr_FiosMediaTenso_3.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PN_CON_1': 'no label', 'PN_CON_2': 'no label', 'CTMT': 'no label', 'CT_COD_OP': 'no label', 'UNI_TR_AT': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'ARE_LOC': 'no label', 'DIST': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'FAS_CON': 'no label', 'TIP_INST': 'no label', 'TIP_CND': 'no label', 'POS': 'no label', 'ODI': 'no label', 'TI': 'no label', 'CM': 'no label', 'SITCONT': 'no label', 'COMP': 'no label', 'DESCR': 'no label', 'Shape_Leng': 'no label', });
lyr_FiosBaixaTenso_4.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PN_CON_1': 'no label', 'PN_CON_2': 'no label', 'UNI_TR_MT': 'no label', 'CTMT': 'no label', 'CT_COD_OP': 'no label', 'UNI_TR_AT': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'ARE_LOC': 'no label', 'FAS_CON': 'no label', 'DIST': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'TIP_INST': 'no label', 'TIP_CND': 'no label', 'POS': 'no label', 'ODI': 'no label', 'TI': 'no label', 'CM': 'no label', 'SITCONT': 'no label', 'COMP': 'no label', 'DESCR': 'no label', 'Shape_Leng': 'no label', });
lyr_Postes_5.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DIST': 'no label', 'TIP_PN': 'no label', 'POS': 'no label', 'ESTR': 'no label', 'MAT': 'no label', 'ESF': 'no label', 'ALT': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'ODI': 'no label', 'TI': 'no label', 'CM': 'no label', 'TUC': 'no label', 'A1': 'no label', 'A2': 'no label', 'A3': 'no label', 'A4': 'no label', 'A5': 'no label', 'A6': 'no label', 'SITCONT': 'no label', 'DESCR': 'no label', 'ARE_LOC': 'no label', 'UAR': 'no label', 'TIP_INST': 'no label', });
lyr_Postes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});