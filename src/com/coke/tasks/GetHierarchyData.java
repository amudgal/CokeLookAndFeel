/**
   Created by : Amit Mudgal (Senior Principal Consultant)
   Created on : 5/23/2017
 * MicroStrategy SDK
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

package com.coke.tasks;

import com.microstrategy.web.beans.MarkupOutput;
import com.microstrategy.web.beans.RequestKeys;
import com.microstrategy.web.objects.WebIServerSession;
import com.microstrategy.web.objects.WebObjectsException;
import com.microstrategy.web.objects.WebObjectsFactory;
import com.microstrategy.web.tasks.AbstractBaseTask;
import com.microstrategy.web.tasks.TaskParameterMetadata;
import com.microstrategy.web.tasks.TaskRequestContext;

public class GetHierarchyData extends AbstractBaseTask  {
	private TaskParameterMetadata sessionState;
    public GetHierarchyData() {
        super("This task gets the data for pop up");
        //sessionState = addParameterMetadata("SessionState", "Enter valid session state.", true, "");
    }

    public void processRequest(TaskRequestContext context, MarkupOutput out) {
    	RequestKeys keys = context.getRequestKeys();
    	String stateSession = context.getContainerServices().getSessionID();
    	WebObjectsFactory objectFactory = WebObjectsFactory.getInstance();
    	WebIServerSession serverSession = objectFactory.getIServerSession();
    	serverSession.setSessionID(stateSession+serverSession.getServerName()+":"+serverSession.getLocaleID());
        try {
        	System.out.println(serverSession.getProjectName());
			out.append("User Name:: " + serverSession.getUserInfo().getDisplayName());
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebObjectsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }

}