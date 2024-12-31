var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIShadedRelief_1 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ParliamentConstituency_3 = new ol.format.GeoJSON();
var features_ParliamentConstituency_3 = format_ParliamentConstituency_3.readFeatures(json_ParliamentConstituency_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParliamentConstituency_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParliamentConstituency_3.addFeatures(features_ParliamentConstituency_3);
var lyr_ParliamentConstituency_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParliamentConstituency_3, 
                style: style_ParliamentConstituency_3,
                popuplayertitle: 'Parliament Constituency',
                interactive: true,
                title: '<img src="styles/legend/ParliamentConstituency_3.png" /> Parliament Constituency'
            });
var format_PCDetails_4 = new ol.format.GeoJSON();
var features_PCDetails_4 = format_PCDetails_4.readFeatures(json_PCDetails_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCDetails_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCDetails_4.addFeatures(features_PCDetails_4);
var lyr_PCDetails_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCDetails_4, 
                style: style_PCDetails_4,
                popuplayertitle: 'PC Details',
                interactive: true,
                title: '<img src="styles/legend/PCDetails_4.png" /> PC Details'
            });
var format_AssemblyConstituency_5 = new ol.format.GeoJSON();
var features_AssemblyConstituency_5 = format_AssemblyConstituency_5.readFeatures(json_AssemblyConstituency_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssemblyConstituency_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssemblyConstituency_5.addFeatures(features_AssemblyConstituency_5);
var lyr_AssemblyConstituency_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssemblyConstituency_5, 
                style: style_AssemblyConstituency_5,
                popuplayertitle: 'Assembly Constituency',
                interactive: true,
                title: '<img src="styles/legend/AssemblyConstituency_5.png" /> Assembly Constituency'
            });
var format_ACDetails_6 = new ol.format.GeoJSON();
var features_ACDetails_6 = format_ACDetails_6.readFeatures(json_ACDetails_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACDetails_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACDetails_6.addFeatures(features_ACDetails_6);
var lyr_ACDetails_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACDetails_6, 
                style: style_ACDetails_6,
                popuplayertitle: 'AC Details',
                interactive: true,
                title: '<img src="styles/legend/ACDetails_6.png" /> AC Details'
            });
var format_ZoneDetails_7 = new ol.format.GeoJSON();
var features_ZoneDetails_7 = format_ZoneDetails_7.readFeatures(json_ZoneDetails_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneDetails_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneDetails_7.addFeatures(features_ZoneDetails_7);
var lyr_ZoneDetails_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneDetails_7, 
                style: style_ZoneDetails_7,
                popuplayertitle: 'Zone Details',
                interactive: true,
                title: '<img src="styles/legend/ZoneDetails_7.png" /> Zone Details'
            });
var format_TBDCMDetails_8 = new ol.format.GeoJSON();
var features_TBDCMDetails_8 = format_TBDCMDetails_8.readFeatures(json_TBDCMDetails_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TBDCMDetails_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TBDCMDetails_8.addFeatures(features_TBDCMDetails_8);
var lyr_TBDCMDetails_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TBDCMDetails_8, 
                style: style_TBDCMDetails_8,
                popuplayertitle: 'TBDCM Details',
                interactive: true,
                title: '<img src="styles/legend/TBDCMDetails_8.png" /> TBDCM Details'
            });
var format_ElevationDetails_9 = new ol.format.GeoJSON();
var features_ElevationDetails_9 = format_ElevationDetails_9.readFeatures(json_ElevationDetails_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElevationDetails_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElevationDetails_9.addFeatures(features_ElevationDetails_9);
var lyr_ElevationDetails_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElevationDetails_9, 
                style: style_ElevationDetails_9,
                popuplayertitle: 'Elevation Details',
                interactive: true,
                title: '<img src="styles/legend/ElevationDetails_9.png" /> Elevation Details'
            });
var format_CountourDetails_10 = new ol.format.GeoJSON();
var features_CountourDetails_10 = format_CountourDetails_10.readFeatures(json_CountourDetails_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountourDetails_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountourDetails_10.addFeatures(features_CountourDetails_10);
var lyr_CountourDetails_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountourDetails_10, 
                style: style_CountourDetails_10,
                popuplayertitle: ' Countour Details',
                interactive: true,
                title: '<img src="styles/legend/CountourDetails_10.png" />  Countour Details'
            });
var format_RoadDetails_11 = new ol.format.GeoJSON();
var features_RoadDetails_11 = format_RoadDetails_11.readFeatures(json_RoadDetails_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadDetails_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadDetails_11.addFeatures(features_RoadDetails_11);
var lyr_RoadDetails_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadDetails_11, 
                style: style_RoadDetails_11,
                popuplayertitle: 'Road Details',
                interactive: true,
                title: '<img src="styles/legend/RoadDetails_11.png" /> Road Details'
            });
var format_ULBDetails_12 = new ol.format.GeoJSON();
var features_ULBDetails_12 = format_ULBDetails_12.readFeatures(json_ULBDetails_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULBDetails_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULBDetails_12.addFeatures(features_ULBDetails_12);
var lyr_ULBDetails_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULBDetails_12, 
                style: style_ULBDetails_12,
                popuplayertitle: 'ULB Details',
                interactive: true,
                title: '<img src="styles/legend/ULBDetails_12.png" /> ULB Details'
            });
var format_STPs_13 = new ol.format.GeoJSON();
var features_STPs_13 = format_STPs_13.readFeatures(json_STPs_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STPs_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STPs_13.addFeatures(features_STPs_13);
var lyr_STPs_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STPs_13, 
                style: style_STPs_13,
                popuplayertitle: 'STPs',
                interactive: true,
    title: 'STPs<br />\
    <img src="styles/legend/STPs_13_0.png" /> NSTP<br />\
    <img src="styles/legend/STPs_13_1.png" /> STP<br />'
        });
var format_ULBBoundary_14 = new ol.format.GeoJSON();
var features_ULBBoundary_14 = format_ULBBoundary_14.readFeatures(json_ULBBoundary_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULBBoundary_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULBBoundary_14.addFeatures(features_ULBBoundary_14);
var lyr_ULBBoundary_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULBBoundary_14, 
                style: style_ULBBoundary_14,
                popuplayertitle: 'ULB Boundary',
                interactive: true,
                title: '<img src="styles/legend/ULBBoundary_14.png" /> ULB Boundary'
            });
var format_APStateBOUNDARY_15 = new ol.format.GeoJSON();
var features_APStateBOUNDARY_15 = format_APStateBOUNDARY_15.readFeatures(json_APStateBOUNDARY_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APStateBOUNDARY_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APStateBOUNDARY_15.addFeatures(features_APStateBOUNDARY_15);
var lyr_APStateBOUNDARY_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APStateBOUNDARY_15, 
                style: style_APStateBOUNDARY_15,
                popuplayertitle: 'AP State BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/APStateBOUNDARY_15.png" /> AP State BOUNDARY'
            });
var group_Plan = new ol.layer.Group({
                                layers: [lyr_ZoneDetails_7,lyr_TBDCMDetails_8,lyr_ElevationDetails_9,lyr_CountourDetails_10,lyr_RoadDetails_11,lyr_ULBDetails_12,],
                                fold: "open",
                                title: 'Plan'});
var group_BASEMAPs = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_ESRIShadedRelief_1,lyr_OSMStandard_2,],
                                fold: "open",
                                title: 'BASE MAPs'});

lyr_GoogleHybrid_0.setVisible(true);lyr_ESRIShadedRelief_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_ParliamentConstituency_3.setVisible(true);lyr_PCDetails_4.setVisible(true);lyr_AssemblyConstituency_5.setVisible(true);lyr_ACDetails_6.setVisible(true);lyr_ZoneDetails_7.setVisible(true);lyr_TBDCMDetails_8.setVisible(true);lyr_ElevationDetails_9.setVisible(true);lyr_CountourDetails_10.setVisible(true);lyr_RoadDetails_11.setVisible(true);lyr_ULBDetails_12.setVisible(true);lyr_STPs_13.setVisible(true);lyr_ULBBoundary_14.setVisible(true);lyr_APStateBOUNDARY_15.setVisible(true);
var layersList = [group_BASEMAPs,lyr_ParliamentConstituency_3,lyr_PCDetails_4,lyr_AssemblyConstituency_5,lyr_ACDetails_6,group_Plan,lyr_STPs_13,lyr_ULBBoundary_14,lyr_APStateBOUNDARY_15];
lyr_ParliamentConstituency_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ST_NAME': 'ST_NAME', 'PC_NAME': 'PC_NAME', 'ST_CODE': 'ST_CODE', 'PC_CODE': 'PC_CODE', 'Res': 'Res', 'No_AC': 'No of Assembly Constituencies', 'Area': 'Area(SQ.KM)', 'Count_Elec': 'Count of Electors', 'Count_Voters': 'Count of Voters', 'Data_Source': 'Data Source', 'Name_AC': 'Name of Assembly Constituencies', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PCDetails_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ST_NAME': 'ST_NAME', 'PC_NAME': 'PC_NAME', 'PC_CODE': 'PC_CODE', 'Res': 'Res', 'No_AC': 'No of Assembly Constituencies', 'Area': 'Area(SQ.KM)', 'Count_Elec': 'Count of Electors', 'Count_Voters': 'Count of Voters', 'Data_Source': 'Data Source', 'Name_AC': 'Name of Assembly Constituencies', });
lyr_AssemblyConstituency_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ST_NAME': 'ST_NAME', 'DIST_NAME': 'DIST_NAME', 'AC_NO': 'AC_NO', 'AC_NAME': 'AC_NAME', 'PC_NO': 'PC_NO', 'PC_NAME': 'PC_NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Area': 'Area(SQ.KM)', });
lyr_ACDetails_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ST_NAME': 'State Name', 'DIST_NAME': 'District Name', 'AC_NO': 'Assembly No.', 'AC_NAME': 'Assembly Name', 'PC_NO': 'PC NO.', 'PC_NAME': 'PC Name', 'Area': 'Area(SQ.KM)', 'ORIG_FID': 'ORIG_FID', });
lyr_ZoneDetails_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name_ULB': 'Name_ULB', 'Area': 'Area(SQ.KM)', 'image': 'image', });
lyr_TBDCMDetails_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name_ULB': 'Name_ULB', 'Area': 'Area(SQ.KM)', 'image': 'image', 'Image_2': 'Image_2', 'Image_1': 'Image_1', });
lyr_ElevationDetails_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name_ULB': 'Name_ULB', 'Area': 'Area(SQ.KM)', 'image': 'image', 'Image_1': 'Image_1', });
lyr_CountourDetails_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name_ULB': 'Name_ULB', 'Area': 'Area(SQ.KM)', 'image': 'image', });
lyr_RoadDetails_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name_ULB': 'Name_ULB', 'Area': 'Area(SQ.KM)', 'Image': 'Image', });
lyr_ULBDetails_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UN_ID': 'UN_ID', 'Name_ULB': 'Name of ULBs', 'Total_ulb': 'Total No. of Projects', 'No_STP': 'No. of STPs', 'No_NSTP': 'No. of NSTPs', 'Status_con': 'Status of Construction', 'Status_STP': 'Status of STPs', 'Total_Pop': 'ULB Population(2011)', 'Total_Cost': 'Total Project cost(Cr.)', 'Name': 'Name', 'Area': 'Area(SQ.KM)', 'ORIG_FID': 'ORIG_FID', });
lyr_STPs_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UN_ID': 'UN_ID', 'DIST_NAME': 'District Name', 'ULB_NAME': 'Name of ULBs', 'LOCATION': 'STPs Location', 'CAPACITY_M': 'Capacity in MLD', 'TYPE': 'Type of STPs', 'TECHNOLOGY': 'TECHNOLOGY', 'LAND_OWNER': 'Land Ownership', 'LAND_REQ': 'Land Required', 'STATUS_POS': 'Status of Possession', 'PROJ_ST_1': 'Status on 20-09-2024', 'PROJ_ST_2': 'Status on 25-09-2024', 'Proj_Cost': 'Proj_Cost', });
lyr_ULBBoundary_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UN_ID': 'UN_ID', 'Name_ULB': 'Name of ULBs', 'Total_ulb': 'Total No. of Projects', 'No_STP': 'No of STP', 'No_NSTP': 'No of NSTP', 'Status_con': 'Status of Construction', 'Status_STP': 'Status of STPs', 'Total_Pop': 'ULBs Population(2011)', 'Total_Cost': 'Total Project Cost(Cr.)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'Area': 'Area(SQ.KM)', });
lyr_APStateBOUNDARY_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'State Name', 'Ara': 'Area(SQ.KM)', 'No_PC': 'No of Parliamentary-Constituencies', 'No_AC': 'No of Assembly-Constituencies', 'No_ulb': 'No of ULBs', 'T_ulb_pop': 'Total ULBs Population(2011)', 'No_Distric': 'No of Districts', 'Population': 'Population(2011)', 'Pop_2024': 'Population(2024)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ParliamentConstituency_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ST_NAME': 'TextEdit', 'PC_NAME': 'TextEdit', 'ST_CODE': 'TextEdit', 'PC_CODE': 'Range', 'Res': 'TextEdit', 'No_AC': 'Range', 'Area': 'TextEdit', 'Count_Elec': 'Range', 'Count_Voters': 'Range', 'Data_Source': 'TextEdit', 'Name_AC': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PCDetails_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ST_NAME': 'TextEdit', 'PC_NAME': 'TextEdit', 'PC_CODE': 'Range', 'Res': 'TextEdit', 'No_AC': 'Range', 'Area': 'TextEdit', 'Count_Elec': 'Range', 'Count_Voters': 'Range', 'Data_Source': 'TextEdit', 'Name_AC': 'TextEdit', });
lyr_AssemblyConstituency_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ST_NAME': 'TextEdit', 'DIST_NAME': 'TextEdit', 'AC_NO': 'Range', 'AC_NAME': 'TextEdit', 'PC_NO': 'Range', 'PC_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_ACDetails_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'ST_NAME': 'TextEdit', 'DIST_NAME': 'TextEdit', 'AC_NO': 'Range', 'AC_NAME': 'TextEdit', 'PC_NO': 'Range', 'PC_NAME': 'TextEdit', 'Area': 'TextEdit', 'ORIG_FID': 'Range', });
lyr_ZoneDetails_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name_ULB': 'TextEdit', 'Area': 'TextEdit', 'image': 'ExternalResource', });
lyr_TBDCMDetails_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name_ULB': 'TextEdit', 'Area': 'TextEdit', 'image': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image_1': 'ExternalResource', });
lyr_ElevationDetails_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name_ULB': 'TextEdit', 'Area': 'TextEdit', 'image': 'ExternalResource', 'Image_1': 'ExternalResource', });
lyr_CountourDetails_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name_ULB': 'TextEdit', 'Area': 'TextEdit', 'image': 'ExternalResource', });
lyr_RoadDetails_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name_ULB': 'TextEdit', 'Area': 'TextEdit', 'Image': 'ExternalResource', });
lyr_ULBDetails_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'UN_ID': 'Range', 'Name_ULB': 'TextEdit', 'Total_ulb': 'Range', 'No_STP': 'Range', 'No_NSTP': 'Range', 'Status_con': 'TextEdit', 'Status_STP': 'TextEdit', 'Total_Pop': 'Range', 'Total_Cost': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'ORIG_FID': 'Range', });
lyr_STPs_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'UN_ID': 'Range', 'DIST_NAME': 'TextEdit', 'ULB_NAME': 'TextEdit', 'LOCATION': 'TextEdit', 'CAPACITY_M': 'TextEdit', 'TYPE': 'TextEdit', 'TECHNOLOGY': 'TextEdit', 'LAND_OWNER': 'TextEdit', 'LAND_REQ': 'TextEdit', 'STATUS_POS': 'TextEdit', 'PROJ_ST_1': 'TextEdit', 'PROJ_ST_2': 'TextEdit', 'Proj_Cost': 'TextEdit', });
lyr_ULBBoundary_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'UN_ID': 'Range', 'Name_ULB': 'TextEdit', 'Total_ulb': 'Range', 'No_STP': 'Range', 'No_NSTP': 'Range', 'Status_con': 'TextEdit', 'Status_STP': 'TextEdit', 'Total_Pop': 'Range', 'Total_Cost': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_APStateBOUNDARY_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'Range', 'Name': 'TextEdit', 'Ara': 'TextEdit', 'No_PC': 'Range', 'No_AC': 'Range', 'No_ulb': 'Range', 'T_ulb_pop': 'Range', 'No_Distric': 'Range', 'Population': 'TextEdit', 'Pop_2024': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ParliamentConstituency_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'ST_NAME': 'hidden field', 'PC_NAME': 'inline label - visible with data', 'ST_CODE': 'hidden field', 'PC_CODE': 'hidden field', 'Res': 'hidden field', 'No_AC': 'hidden field', 'Area': 'inline label - visible with data', 'Count_Elec': 'inline label - visible with data', 'Count_Voters': 'inline label - visible with data', 'Data_Source': 'inline label - visible with data', 'Name_AC': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PCDetails_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'ST_NAME': 'hidden field', 'PC_NAME': 'inline label - visible with data', 'PC_CODE': 'hidden field', 'Res': 'hidden field', 'No_AC': 'hidden field', 'Area': 'inline label - visible with data', 'Count_Elec': 'hidden field', 'Count_Voters': 'inline label - visible with data', 'Data_Source': 'header label - visible with data', 'Name_AC': 'header label - visible with data', });
lyr_AssemblyConstituency_5.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'ST_NAME': 'inline label - visible with data', 'DIST_NAME': 'inline label - visible with data', 'AC_NO': 'hidden field', 'AC_NAME': 'inline label - visible with data', 'PC_NO': 'hidden field', 'PC_NAME': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_ACDetails_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'ST_NAME': 'inline label - visible with data', 'DIST_NAME': 'inline label - visible with data', 'AC_NO': 'hidden field', 'AC_NAME': 'inline label - visible with data', 'PC_NO': 'hidden field', 'PC_NAME': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'ORIG_FID': 'hidden field', });
lyr_ZoneDetails_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'image': 'header label - visible with data', });
lyr_TBDCMDetails_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'image': 'header label - visible with data', 'Image_2': 'header label - visible with data', 'Image_1': 'header label - visible with data', });
lyr_ElevationDetails_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'image': 'header label - visible with data', 'Image_1': 'header label - visible with data', });
lyr_CountourDetails_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'image': 'header label - visible with data', });
lyr_RoadDetails_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Image': 'header label - visible with data', });
lyr_ULBDetails_12.set('fieldLabels', {'OBJECTID': 'hidden field', 'UN_ID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Total_ulb': 'inline label - visible with data', 'No_STP': 'inline label - visible with data', 'No_NSTP': 'inline label - visible with data', 'Status_con': 'inline label - visible with data', 'Status_STP': 'inline label - visible with data', 'Total_Pop': 'inline label - visible with data', 'Total_Cost': 'inline label - visible with data', 'Name': 'hidden field', 'Area': 'hidden field', 'ORIG_FID': 'hidden field', });
lyr_STPs_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'UN_ID': 'hidden field', 'DIST_NAME': 'inline label - visible with data', 'ULB_NAME': 'inline label - visible with data', 'LOCATION': 'inline label - visible with data', 'CAPACITY_M': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'TECHNOLOGY': 'inline label - visible with data', 'LAND_OWNER': 'inline label - visible with data', 'LAND_REQ': 'inline label - visible with data', 'STATUS_POS': 'inline label - visible with data', 'PROJ_ST_1': 'inline label - visible with data', 'PROJ_ST_2': 'inline label - visible with data', 'Proj_Cost': 'hidden field', });
lyr_ULBBoundary_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'UN_ID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Total_ulb': 'inline label - visible with data', 'No_STP': 'inline label - visible with data', 'No_NSTP': 'inline label - visible with data', 'Status_con': 'inline label - visible with data', 'Status_STP': 'inline label - visible with data', 'Total_Pop': 'inline label - visible with data', 'Total_Cost': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'hidden field', 'Area': 'hidden field', });
lyr_APStateBOUNDARY_15.set('fieldLabels', {'OBJECTID': 'hidden field', 'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Ara': 'inline label - visible with data', 'No_PC': 'inline label - visible with data', 'No_AC': 'inline label - visible with data', 'No_ulb': 'inline label - visible with data', 'T_ulb_pop': 'inline label - visible with data', 'No_Distric': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_2024': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_APStateBOUNDARY_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});