package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

import com.adobe.aem.guides.wknd.spa.react.core.models.CartItem;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { CartItem.class,
        ComponentExporter.class }, resourceType = CartItemImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class CartItemImpl implements CartItem {

    static final String RESOURCE_TYPE = "wknd-spa-react/components/cartitems";

    @Override
    public String getExportedType() {
        // TODO Auto-generated method stub
        return CartItemImpl.RESOURCE_TYPE;
    }

}
