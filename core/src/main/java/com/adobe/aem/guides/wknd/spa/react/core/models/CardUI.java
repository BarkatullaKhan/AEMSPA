package com.adobe.aem.guides.wknd.spa.react.core.models;

import java.util.Collection;

import com.adobe.aem.guides.wknd.spa.react.core.utils.CardHelper;
import com.adobe.cq.export.json.ComponentExporter;

public interface CardUI extends ComponentExporter{
    public Collection<CardHelper> getCards();
    public String getCardLink();
    public String getCardHeadline();
}
