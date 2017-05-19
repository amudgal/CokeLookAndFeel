/**
 * MicroStrategy SDK Sample
 *
 * Copyright © 2017 MicroStrategy Incorporated. All Rights Reserved.
 *
* MICROSTRATEGY MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE 
 * SUITABILITY OF THIS SAMPLE CODE, EITHER EXPRESS OR IMPLIED, INCLUDING 
 * BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
 * FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. MICROSTRATEGY SHALL NOT 
 * BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, 
 * MODIFYING OR DISTRIBUTING THIS SAMPLE CODE OR ITS DERIVATIVES.
 *
 *
 */


package com.coke;

import com.microstrategy.web.app.addons.AbstractAppAddOn;
import com.microstrategy.web.app.beans.PageComponent;
import com.microstrategy.web.beans.RWBean;


public class ApplyFilterCriteria extends AbstractAppAddOn { 
 
    public String getAddOnDescription() {
        return "";
    }

    public void preCollectData(PageComponent page) {
    	System.out.println("Inside PreCollect");
    	RWBean rwb = (RWBean) page.getChildByClass(RWBean.class);

    	super.preCollectData(page);
    }

   

}