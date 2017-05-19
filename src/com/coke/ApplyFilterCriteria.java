/**
 * Created by Amit Mudgal (Senior Principal Consultant) 
 * Date : 5/18/2017
 * 
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
import com.microstrategy.web.beans.PromptsBean;
import com.microstrategy.web.beans.RWBean;
import com.microstrategy.web.beans.WebBeanException;
import com.microstrategy.web.objects.WebDocumentInstance;
import com.microstrategy.web.objects.WebObjectsException;
import com.microstrategy.web.objects.WebPrompts;
import com.microstrategy.web.objects.rw.RWInstance;


public class ApplyFilterCriteria extends AbstractAppAddOn { 
 
    public String getAddOnDescription() {
        return "";
    }

    public void preCollectData(PageComponent page) {
    	System.out.println("Inside PreCollect");
    	RWBean rwb = (RWBean) page.getChildByClass(RWBean.class);
    	
    	try {
    		RWInstance rwbi = rwb.getRWInstance();
			if(rwbi.isPrompted()){
			PromptsBean pbs = rwb.getPromptsBean();
			WebPrompts prompts = pbs.getPrompts();
			System.out.println("prompt size: " +prompts.size());
			
			}
		} catch (WebObjectsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebBeanException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	super.preCollectData(page);
    }

   

}